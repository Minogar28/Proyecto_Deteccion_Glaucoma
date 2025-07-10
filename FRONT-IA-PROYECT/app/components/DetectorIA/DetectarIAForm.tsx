import React, { useState, type SyntheticEvent } from "react";
import { useDetectorIA } from "@/hooks/useDetectorIA";
import TabsBase from "@/components/Tabs/TabsBase";
import SendImage from "./SendImage";
import ImageDisplay from "@/components/ImagenViewer/ImageDisplay";

export default function DetectarIAForm() {
  const [imagenFile, setImagenFile] = useState<File | null>(null);

  const {
    msg,
    imagen,
    setImagen,
    imPrePro,
    imLoc,
    imSeg,
    resetAll,
    processAll,
    enviarArchivo,
  } = useDetectorIA();

  const handleUpload = async (file: File) => {
    const imgURL = URL.createObjectURL(file);
    setImagen(imgURL); //visualizacion
    setImagenFile(file); //envio
    // resetAll();
    // await processAll();
  };

  const tabs = [
    {
      label: "Subir Imagen",
      content: (
        <SendImage
          imagen={imagen}
          handleUpload={handleUpload}
          handleImage={() => setImagen(null)}
          onDetect={(ojo, id) => {
            if (!imagenFile) return;
            enviarArchivo(imagenFile, ojo, id);
          }}
          onSelectUser={() => {
            console.log("Seleccionar usuario");
          }}
        />
      ),
      disabled: false,
    },
    {
      label: "Pre-procesada",
      content: imPrePro ? (
        <ImageDisplay src={imPrePro} alt='Imagen Pre-procesada' />
      ) : (
        <p>No disponible</p>
      ),
      disabled: !imPrePro,
    },
    {
      label: "Localizada",
      content: imLoc ? (
        <img src={imLoc} alt='Localizada' className='max-w-md' />
      ) : (
        <p>No disponible</p>
      ),
      disabled: !imLoc,
    },
    // {
    //   label: "Segmentada",
    //   content: imSeg ? (
    //     <img src={imSeg} alt='Segmentada' className='max-w-md' />
    //   ) : (
    //     <p>No disponible</p>
    //   ),
    //   disabled: !imSeg,
    // },
    {
      label: "Resultado",
      content: <p>Métricas o resultados IA.</p>,
      disabled: !(imPrePro && imLoc && imSeg),
    },
  ];

  return (
    <>
      {msg && alert(msg)}
      <div className='flex flex-row w-full h-full bg-blue-50 rounded-2xl p-4'>
        <TabsBase
          tabs={tabs}
          tabsProps={{
            orientation: "vertical",
            variant: "scrollable",
            sx: {
              borderRight: 1,
              borderColor: "divider",
            },
          }}
        />
      </div>
    </>
  );
}
