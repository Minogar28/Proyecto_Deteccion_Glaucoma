type PropsImageViewer = {
  src: string;
  alt?: string;
  onRemove?: () => void;
};

export default function ImageViewer({ src, alt, onRemove }: PropsImageViewer) {
  return (
    <div className='relative max-w-md size-80 flex items-center justify-center'>
      <img
        src={src}
        alt={alt ?? "Imagen"}
        className='rounded shadow w-full h-full object-contain'
      />
      {onRemove && (
        <button
          onClick={onRemove}
          className='absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded hover:bg-red-700 transition-all'>
          ✕
        </button>
      )}
    </div>
  );
}
