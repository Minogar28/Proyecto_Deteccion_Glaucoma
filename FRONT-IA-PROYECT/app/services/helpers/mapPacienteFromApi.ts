import type { Paciente, PacienteRaw } from "@/types";

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

export function mapPacienteToApi(
  data: Omit<Paciente, "id">
): Record<string, any> {
  return {
    paci_nombre: data.nombre,
    paci_apellido: data.apellido,
    paci_numero_identificacion: data.numero_identificacion,
    paci_edad: data.edad ?? null,
    paci_sexo: data.sexo ?? null,
    paci_diabetes: data.diabetes ?? null,
    paci_id_empresa: data.id_empresa ?? null,
  };
}

export function getPacienteDataForFormData(
  paciente: Paciente | null
): Record<string, string> {
  if (!paciente) return {};

  return {
    paci_nombre: paciente.nombre ?? "",
    paci_apellido: paciente.apellido ?? "",
    paci_numero_identificacion: paciente.numero_identificacion ?? "",
    paci_edad: paciente.edad?.toString() ?? "",
    paci_sexo: paciente.sexo ?? "",
    paci_diabetes: paciente.diabetes?.toString() ?? "",
    paci_id_empresa: paciente.id_empresa?.toString() ?? "1",
  };
}
