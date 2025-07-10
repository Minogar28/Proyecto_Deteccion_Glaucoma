import type { ReactNode } from "react";

export interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}
