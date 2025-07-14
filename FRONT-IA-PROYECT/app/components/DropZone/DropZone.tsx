import { useRef, type DragEvent } from "react";
import type { DropzoneProps } from "./config/DropZone.type";
import { dropzoneStyle } from "./config/DropZone.style";

export default function Dropzone({ onDrop, className }: DropzoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) onDrop(file);
  };

  return (
    <div
      className={`${dropzoneStyle} ${className}`}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => fileInputRef.current?.click()}>
      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onDrop(file);
        }}
      />
      <span>Haz clic o arrastra una imagen aquí</span>
    </div>
  );
}
