import { apiPost } from "@/services/http";
import { mapPacienteToApi, mapPacienteFromApi } from "@/services/helpers";
import type { Paciente } from "@/types";

export const createPaciente = async (
  data: Omit<Paciente, "id">
): Promise<Paciente> => {
  const raw = mapPacienteToApi(data);

  try {
    const response = (await apiPost("/pacientes", raw)) as { paciente: any };
    return mapPacienteFromApi(response.paciente);
  } catch (error) {
    console.error("Error al crear paciente:", error);
    throw error;
  }
};
