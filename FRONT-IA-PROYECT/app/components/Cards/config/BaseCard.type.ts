// components/Card/config/Cards.type.ts
import type { MouseEventHandler, ReactNode } from "react";

export interface BaseCardProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
}
