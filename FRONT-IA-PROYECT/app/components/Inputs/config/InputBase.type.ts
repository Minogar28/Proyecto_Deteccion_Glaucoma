import type { InputHTMLAttributes } from "react";

export interface InputBaseInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  hasError?: boolean;
}
