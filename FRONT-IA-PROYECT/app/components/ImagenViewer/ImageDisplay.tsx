import type { Component, ReactNode } from "react";

type PropsImageDisplay = {
  src: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
};

export default function ImageDisplay({
  src,
  alt,
  className,
  children,
}: PropsImageDisplay) {
  return (
    <div
      className={`max-w-md size-full flex items-center justify-center ${className}`}>
      <img
        src={src}
        alt={alt ?? "Imagen"}
        className='rounded shadow w-full h-full object-contain'
      />
      {children}
    </div>
  );
}
