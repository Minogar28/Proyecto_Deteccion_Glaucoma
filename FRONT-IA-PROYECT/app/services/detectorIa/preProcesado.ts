import { apiPost } from "@/services/http";
import type { preProcesadoRespuesta } from "@/types/preProcesadoRespuesta.type";

export const preProcesado = async (
  file: File,
  ojo: string,
  pacienteId: number
): Promise<preProcesadoRespuesta> => {
  const formData = new FormData();
  formData.append("imagen", file);
  formData.append("ojo", ojo);
  formData.append("id_paciente", pacienteId.toString());

  try {
    const respuesta = await apiPost("/imagen/procesar", formData, false);
    return respuesta as preProcesadoRespuesta;
  } catch (error) {
    console.error("Error al enviar la imagen:", error);
    throw error;
  }
};
