import { apiPost } from "@/services/http";
import type { preProcesadoRespuesta } from "@/types/preProcesadoRespuesta.type";

export const preProcesado = async (
  file: File,
  ojo: string,
  pacienteId: number | null,
  pacienteData?: Record<string, string>
): Promise<preProcesadoRespuesta> => {
  const formData = new FormData();
  formData.append("imagen", file);
  formData.append("ojo", ojo);

  if (pacienteId !== null) {
    formData.append("id_paciente", pacienteId.toString());
  } else if (pacienteData) {
    Object.entries(pacienteData).forEach(([key, value]) => {
      formData.append(key, value);
      console.log(key);
    });
  }

  try {
    const respuesta = await apiPost("/imagen/procesar", formData, false);
    return respuesta as preProcesadoRespuesta;
  } catch (error) {
    console.error("Error al enviar la imagen:", error);
    throw error;
  }
};
