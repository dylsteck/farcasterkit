import React, { useEffect } from 'react';

import { Header } from './Header';
import './signinwithneynar.css';
import Script from 'next/script';

declare global {
  interface Window {
    init: () => void;
    onSignInSuccess: (data: any) => void;
  }
}

export type SignInWithNeynarProps = {
  theme?: 'light' | 'dark';
  variant?: 'neynar' | 'warpcast' | 'farcaster';
  logoSize?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: number;
  padding?: string;
  margin?: number;
  color?: string;
  backgroundColor?: string;
  styles?: string;
  customLogoUrl?: string;
}

const CLIENT_ID = '528a8121-f121-4aee-af91-51829a64bf80'

export const SignInWithNeynar: React.FC = (props: SignInWithNeynarProps) => {
  const onSignInSuccess = (data: any) => {
    console.log("SIWN success with data:", data);
    localStorage.setItem('signInData', JSON.stringify(data));
  };

  const initializeSignIn = () => {
    if (typeof window.init === 'function') {
      window.init();
    }
  };

  useEffect(() => {
    window.onSignInSuccess = onSignInSuccess;
  }, []);

  return (
    <>
      <div
          className="neynar_signin"
          data-client_id={CLIENT_ID}
          data-success-callback="onSignInSuccess"
          data-variant={props.variant || 'neynar'}
          data-logo_size={props.logoSize ? `${props.logoSize}` : '30px'}
          data-height={props.height ? `${props.height}` : '48px'}
          data-widtht={props.width ? `${props.width}` : '218px'}
          data-font_weight={props.fontWeight || '300'}
          data-padding={props.padding || '8px 15px'}
          data-margin={props.margin || '0px'}
      />
      <Script
        src="https://neynarxyz.github.io/siwn/raw/1.0.0/index.js"
        strategy="afterInteractive"
        onLoad={initializeSignIn}
      />
    </>
  );
};
