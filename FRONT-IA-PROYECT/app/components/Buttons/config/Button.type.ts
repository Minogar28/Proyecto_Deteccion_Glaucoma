// Button.types.ts
import type { MouseEventHandler, ReactNode } from "react";

export interface BaseButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
