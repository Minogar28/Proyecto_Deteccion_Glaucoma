import { apiGet } from "@/services/http";
import type { PacienteConEmpresa, PacienteRaw } from "@/types";
import { mapPacientesFromApi } from "@/services/helpers";

export const loadPacientes = async (): Promise<PacienteConEmpresa[]> => {
  try {
    const data = await apiGet<PacienteRaw[]>("/paciente");
    return mapPacientesFromApi(data);
  } catch (error) {
    console.error("Error cargando pacientes:", error);
    return [];
  }
};
