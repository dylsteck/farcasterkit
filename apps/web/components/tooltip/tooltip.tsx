import type { TooltipTriggerState } from '@react-stately/tooltip';
import type { FC, ReactNode } from 'react';

import { useRef } from 'react';
import { tv } from 'tailwind-variants';
import { useTooltipTriggerState } from '@react-stately/tooltip';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';

interface TooltipContentProps {
  state?: TooltipTriggerState;
  children?: ReactNode;
}
interface TooltipProps {
  delay?: number;
  onClick?: () => void;
  content?: ReactNode | string;
  children?: ReactNode;
}

const tooltip = tv({
  slots: {
    content: [
      'flex',
      'items-center',
      'justify-center',
      'cursor-default',
      'font-sans',
      'font-medium',
      'absolute',
      'translate-x-[-40%]',
      'bottom-full',
      'w-[140px]',
      'max-w-[240px]',
      'mb-2',
      'bg-white',
      'dark:bg-zinc-800',
      'dark:text-white',
      'text-black',
      'px-1',
      'py-2',
      'text-slate-700',
      'shadow-lg',
      'rounded-lg',
      'text-sm'
    ]
  }
});

const TooltipContent: FC<TooltipContentProps> = ({
  state,
  children,
  ...props
}) => {
  const { tooltipProps } = useTooltip(props, state);

  const { content } = tooltip();

  return (
    <span className={content()} {...mergeProps(props, tooltipProps)}>
      {children}
    </span>
  );
};

const Tooltip: FC<TooltipProps> = (props) => {
  const state = useTooltipTriggerState(props);
  const ref = useRef();

  // Get props for the trigger and its tooltip
  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <span className="relative">
      <button
        ref={ref}
        className="flex items-center rounded-sm"
        {...triggerProps}
        onClick={props.onClick}
      >
        {props.children}
      </button>
      {state.isOpen && (
        <TooltipContent state={state} {...tooltipProps}>
          {props.content}
        </TooltipContent>
      )}
    </span>
  );
};

export default Tooltip;
