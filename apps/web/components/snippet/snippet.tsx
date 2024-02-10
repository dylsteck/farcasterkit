import type { FC, HTMLAttributes } from 'react';

import { useState } from 'react';
import cn from 'classnames';

import { CopyIcon, CheckIcon, Tooltip } from '@components';

interface Props {}

type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>;

export type SnippetProps = Props & NativeAttrs;

const Snippet: FC<SnippetProps> = ({ className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('npm install farcasterkit');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div
      className={cn(
        'flex h-10 w-[320px] items-center justify-between rounded-full bg-neutral/20 px-6 py-2 font-mono text-xs text-black backdrop-blur md:w-[420px] md:text-sm',
        className
      )}
    >
      <div className="dark:text-white">$ npm install farcasterkit</div>
      <Tooltip content="Copy to clipboard" delay={600} onClick={handleCopyCode}>
        {copied ? (
          <CheckIcon className="text-success" size={18} />
        ) : (
          <CopyIcon
            className="text-neutral-600 dark:text-neutral-400"
            size={18}
          />
        )}
      </Tooltip>
    </div>
  );
};

export default Snippet;
