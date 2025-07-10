type PropsImageDisplay = {
  src: string;
  alt?: string;
};

export default function ImageDisplay({ src, alt }: PropsImageDisplay) {
  return (
    <div className=' max-w-md size-80 flex items-center justify-center'>
      <img
        src={src}
        alt={alt ?? "Resultado IA"}
        className='rounded shadow w-full h-full object-contain'
      />
    </div>
  );
}
