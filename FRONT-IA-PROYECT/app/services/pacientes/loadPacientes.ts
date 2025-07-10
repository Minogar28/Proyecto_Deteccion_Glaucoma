import { apiGet } from "@/services/http";
import type { PacienteConEmpresa } from "@/types";
import { mapPacientesFromApi } from "@/services/helpers";
import type { PacienteRaw } from "../helpers/mapPacienteFromApi";

export const loadPacientes = async (): Promise<PacienteConEmpresa[]> => {
  try {
    const data = await apiGet<PacienteRaw[]>("/paciente");
    return mapPacientesFromApi(data);
  } catch (error) {
    console.error("Error cargando pacientes:", error);
    return [];
  }
};
