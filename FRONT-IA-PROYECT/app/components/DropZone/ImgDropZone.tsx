import Dropzone from "@/components/DropZone/DropZone";
import ImageViewer from "@/components/ImagenViewer/ImageViewer";

type PropsDropZone = {
  imagen: string | null;
  handleUpload: (file: File) => void;
  handleImage: () => void;
};

export default function ImgDropZone({
  imagen,
  handleImage,
  handleUpload,
}: PropsDropZone) {
  return (
    <div className='flex flex-col items-center h-full w-full'>
      {imagen ? (
        <ImageViewer
          src={imagen}
          alt='Imagen Original'
          onRemove={handleImage}
        />
      ) : (
        <Dropzone
          onDrop={handleUpload}
          className='size-full max-w-md mb-4 text-blue-950'
        />
      )}
    </div>
  );
}
