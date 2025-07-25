import { preProcesado } from "@/services/detectorIa/preProcesado";
import { useState } from "react";

export function useDetectorIA() {
  const [imagen, setImagen] = useState<string | null>(null);
  const [imPrePro, setImPrePro] = useState<string | null>(null);
  const [imLoc, setImLoc] = useState<string | null>(null);
  const [imSeg, setImSeg] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const resetAll = () => {
    setImagen(null);
    setImPrePro(null);
    setImLoc(null);
    setImSeg(null);
  };

  const processAll = async () => {
    // Aquí pondrías llamadas reales al backend, por ejemplo:
    // const preProRes = await apiPreProcess(imagen);
    // setImPrePro(preProRes.url);

    await new Promise((res) => setTimeout(res, 1000));
    setImPrePro("https://via.placeholder.com/300?text=Pre-Procesada");

    await new Promise((res) => setTimeout(res, 1000));
    setImLoc("https://via.placeholder.com/300?text=Localizada");

    await new Promise((res) => setTimeout(res, 1000));
    setImSeg("https://via.placeholder.com/300?text=Segmentada");
  };

  const enviarArchivo = async (file: File, ojo: string, pacienteId: number) => {
    try {
      const respuesta = await preProcesado(file, ojo, pacienteId);
      if (respuesta?.imagen_base64) {
        setImPrePro(respuesta.imagen_base64);
        setMsg(respuesta.msg);
      }
    } catch (error) {
      console.error("Error enviando imagen:", error);
    }
  };

  return {
    msg,
    imagen,
    setImagen,
    imPrePro,
    setImPrePro,
    imLoc,
    setImLoc,
    imSeg,
    setImSeg,
    resetAll,
    processAll,
    enviarArchivo,
  };
}
