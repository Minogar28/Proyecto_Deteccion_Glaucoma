export interface preProcesadoRespuesta {
  msg: string;
  ruta_original: string;
  ruta_preprocesada: string;
  imagen_base64: string;
  ojo: string;
  paciente: number | null;
  fecha: string;
}
