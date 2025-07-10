// BaseButton.tsx
import type { MouseEventHandler, ReactNode } from "react";
import type { BaseButtonProps } from "./config/Button.type";

export default function BaseButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  ...rest
}: BaseButtonProps) {
  return (
    <button
      type={type}
      className={`font-bold ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}>
      {children}
    </button>
  );
}
