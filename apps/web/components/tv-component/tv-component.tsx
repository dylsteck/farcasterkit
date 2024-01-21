import type { ElementType, FC, ReactNode } from 'react';

import { tv as t } from 'tailwind-variants';

interface TVComponentProps {
  as: ElementType;
  tv: object;
  children?: ReactNode;
}

const TVComponent: FC<TVComponentProps> = ({
  as = 'div',
  tv = {},
  children,
  ...otherProps
}) => {
  const Component = as;
  const styles = t(tv);

  return (
    <Component className={styles({ ...otherProps })}>{children}</Component>
  );
};

export default TVComponent;
