import type { FC } from 'react';

import Image from 'next/image';

import farcasterKitLogo from '../../public/farcasterKitLogo.png';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const FarcasterKitLogo: FC<LogoProps> = (props) => {
  const { width, height, className } = props;

  return (
    <Image
      alt="Farcaster Kit logo"
      className={`${className}`}
      height={height}
      objectFit="contain"
      src={farcasterKitLogo}
      width={width}
    />
  );
};

export default FarcasterKitLogo;
