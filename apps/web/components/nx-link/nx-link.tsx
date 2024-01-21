import type { ReactNode } from 'react';

export interface NXLinkProps {
  href: string;
  children: ReactNode;
}

export const NXLink = ({ href, children }: NXLinkProps) => {
  return (
    <a
      className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
      <span className="nx-sr-only"> (opens in a new tab)</span>
    </a>
  );
};
