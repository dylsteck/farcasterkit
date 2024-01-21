import type { IconProps } from './icon';
import type { FC } from 'react';

const CodeDocument: FC<IconProps> = ({
  size = 24,
  fill,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={height || size}
      viewBox="0 0 24 24"
      width={width || size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default CodeDocument;
