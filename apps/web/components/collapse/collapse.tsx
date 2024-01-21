import type { FC, ReactNode } from 'react';

export interface CollapseProps {
  title: string;
  children: ReactNode;
}

const Collaspe: FC<CollapseProps> = ({ title, children }) => {
  return (
    <details>
      <summary>{title}</summary>
      <div className="py-2 pl-3">{children}</div>
    </details>
  );
};

export default Collaspe;
