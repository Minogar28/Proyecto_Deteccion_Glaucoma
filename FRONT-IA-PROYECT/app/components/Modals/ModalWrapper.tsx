import { useEffect } from "react";

type ModalWrapperProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  zIndex?: number;
};

export default function ModalWrapper({
  open,
  onClose,
  children,
  width = "500px",
  height = "auto",
  zIndex = 9999,
}: ModalWrapperProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/50'
      style={{ zIndex }}
      onClick={onClose}>
      <div
        className='bg-white rounded-lg shadow-lg p-6 animate-fade-in scale-100 transition-transform relative'
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}>
        <button
          className='absolute top-4 right-4 text-gray-500 hover:text-black'
          onClick={onClose}
          aria-label='Cerrar modal'>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
