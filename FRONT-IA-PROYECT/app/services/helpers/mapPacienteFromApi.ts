import type { Paciente } from "@/types";

export interface PacienteRaw {
  paci_id: number;
  paci_nombre: string;
  paci_apellido: string;
  paci_numero_identificacion: string;
  paci_edad: number;
  paci_sexo: "M" | "F";
  paci_diabetes: 0 | 1;
  paci_id_empresa: number;
}

export function mapPacienteFromApi(data: PacienteRaw): Paciente {
  return {
    id: data.paci_id,
    nombre: data.paci_nombre,
    apellido: data.paci_apellido,
    numero_identificacion: data.paci_numero_identificacion,
    edad: data.paci_edad,
    sexo: data.paci_sexo,
    diabetes: data.paci_diabetes,
    id_empresa: data.paci_id_empresa,
  };
}

export function mapPacientesFromApi(data: PacienteRaw[]): Paciente[] {
  return data.map(mapPacienteFromApi);
}
