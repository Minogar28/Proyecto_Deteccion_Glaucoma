import { ImagenDisplay } from ".";

type PropsImageViewer = {
  src: string;
  alt?: string;
  onRemove?: () => void;
};

export default function ImageViewer({ src, alt, onRemove }: PropsImageViewer) {
  return (
    <ImagenDisplay src={src} alt={alt} className='relative'>
      {onRemove && (
        <button
          onClick={onRemove}
          className='absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded hover:bg-red-700 transition-all'>
          ✕
        </button>
      )}
    </ImagenDisplay>
  );
}
