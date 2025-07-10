import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ModalBaseProps } from "./config/ModalBase.type";

export default function ModalBase({
  isOpen,
  onClose,
  children,
  title,
}: ModalBaseProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!mounted || !isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50'
      onClick={onClose}>
      <div
        className='bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative animate-fadeIn'
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'>
          ✕
        </button>
        {title && <h2 className='text-xl font-semibold mb-4'>{title}</h2>}
        {children}
      </div>
    </div>,
    modalRoot
  );
}
