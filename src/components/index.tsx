import type React from "react";

export const Svg: React.FC<React.PropsWithChildren> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#eee"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const CloseIcon = () => (
  <Svg>
    {/* https://lucide.dev/icons/x */}
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Svg>
);
