"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  onClick?: () => void;
}

export const Button = ({ children, className, appName, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick || (() => alert(`Hello from your ${appName} app!`))}
    >
      {children}
    </button>
  );
};
