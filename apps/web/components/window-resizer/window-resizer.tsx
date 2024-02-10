import type { FC } from 'react';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { useIsomorphicLayoutEffect, useIsMobile } from '@hooks';

const resizer = tv({
  base: 'flex items-center justify-end absolute right-[5px] z-10 w-auto xs:hidden',
  slots: {
    main: 'relative w-full',
    barWrapper:
      'cursor-ew-resize select-none absolute d-flex justify-center flex items-center w-[10px] h-auto active:opacity-80',
    barInner: 'relative z-10',
    bar: 'w-[6px] h-[40px] rounded-full bg-neutral/60',
    iframeWrapper: 'border border-neutral/20 rounded-lg overflow-hidden',
    iframe:
      'w-full h-full border-none overflow-x-visible overflow-y-scroll z-10'
  },
  variants: {
    hasInitialWidth: {
      true: {
        base: 'justify-start'
      }
    },
    isMobile: {
      true: {
        barInner: 'hidden'
      }
    },
    enablePointerEvents: {
      true: {
        iframe: 'pointer-events-auto'
      },
      false: {
        iframe: 'pointer-events-none select-none'
      }
    }
  }
});

interface WindowResizerProps {
  height?: string | number;
  minWidth?: number;
  iframeZoom?: number;
  iframeSrc?: string;
  iframeInitialWidth?: number;
  iframeTitle?: string;
}

const MIN_WIDTH = 200;

const WindowResizer: FC<WindowResizerProps> = (props) => {
  let constraintsResizerRef = useRef<HTMLDivElement>(null);
  let resizerRef = useRef<HTMLDivElement>(null);
  let iframeRef = useRef<HTMLIFrameElement>(null);
  const [enablePointerEvents, setEnablePointerEvents] = useState(true);

  const isMobile = useIsMobile();

  const {
    iframeSrc,
    iframeTitle,
    height = '420px',
    iframeZoom = 1,
    iframeInitialWidth,
    minWidth = MIN_WIDTH
  } = props;
  const hasInitialWidth = iframeInitialWidth !== undefined;

  const { main, base, barInner, barWrapper, bar, iframe, iframeWrapper } =
    resizer({ hasInitialWidth, isMobile, enablePointerEvents });

  const resizerX = useMotionValue(0);
  const browserWidth = useTransform(resizerX, (x) =>
    hasInitialWidth ? iframeInitialWidth + x + 14 : `calc(100% + ${x}px - 14px)`
  );

  useIsomorphicLayoutEffect(() => {
    let observer = new window.ResizeObserver(() => {
      let width =
        constraintsResizerRef.current.offsetWidth -
        resizerRef.current.offsetWidth;

      if (resizerX.get() > width) {
        resizerX.set(width);
      }
    });

    observer.observe(constraintsResizerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!resizerRef.current) {
      return;
    }
    resizerRef.current.onselectstart = () => false;
  }, []);

  // inject iframe styles
  useEffect(() => {
    const iframeStyles = `body { zoom: ${iframeZoom}; }`;

    if (!iframeRef.current) {
      return;
    }
    const iframeDocument = iframeRef.current.contentDocument;
    const iframeEl = iframeRef.current;

    if (!iframeDocument) {
      return;
    }
    // add classname to the iframe html element
    iframeDocument?.documentElement?.classList?.add('overflow-hidden');

    const style = iframeDocument.createElement('style');
    const aside = iframeEl?.contentWindow?.document?.querySelector('aside');

    // removes the nextra footer and aside elements
    if (aside) {
      aside.style.display = 'none';
    }
    if (style) {
      style.innerHTML = iframeStyles;
    }

    iframeDocument.head?.appendChild(style);
  });

  return (
    <div className={main({ class: 'xs:w-mw-xs' })} style={{ height }}>
      <motion.div
        className={iframeWrapper({ class: 'xs:w-mw-xs xs:!w-full' })}
        style={{
          width: isMobile ? '100%' : browserWidth,
          height
        }}
      >
        <motion.iframe
          ref={iframeRef}
          className={iframe()}
          src={iframeSrc}
          title={iframeTitle}
        />
      </motion.div>
      <div
        ref={constraintsResizerRef}
        className={base({
          className: 'xs:w-mw-xs bottom-0 right-0 top-0'
        })}
        style={{
          width: `calc(100% - ${
            hasInitialWidth ? iframeInitialWidth : minWidth
          }px - 20px)`
        }}
      >
        <motion.div
          ref={resizerRef}
          _dragX={resizerX}
          className={barWrapper()}
          drag="x"
          dragConstraints={constraintsResizerRef}
          dragElastic={0}
          dragMomentum={false}
          style={{ x: resizerX }}
          onDragEnd={() => {
            document.documentElement.classList.remove('dragging-ew');
            iframeRef.current?.classList.remove('dragging-ew');
            setEnablePointerEvents(true);
          }}
          onDragStart={() => {
            document.documentElement.classList.add('dragging-ew');
            iframeRef.current?.classList.add('dragging-ew');
            setEnablePointerEvents(false);
          }}
        >
          <div className={barInner()}>
            <div className={bar()} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WindowResizer;
