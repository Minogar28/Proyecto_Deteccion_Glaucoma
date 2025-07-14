import { apiPost } from "@/services/http";
import type { localizar } from "@/types";

export const localizarImagen = async (
  ruta_imagen: string
): Promise<localizar> => {
  const data = { ruta_imagen };

  try {
    const respuesta = await apiPost<localizar>(
      "/imagen/localizar",
      data,
      false
    );
    console.log(respuesta?.imagen_base64);
    return respuesta as localizar;
  } catch (error) {
    console.error("Error al enviar la imagen:", error);
    throw error;
  }
};
