export interface Paciente {
  id?: number;
  nombre: string;
  apellido: string;
  numero_identificacion: string;
  edad?: number;
  sexo?: "M" | "F" | "";
  diabetes?: 1 | 0;
  id_empresa?: number;
}

export interface PacienteConEmpresa extends Paciente {
  empresa?: {
    id: number;
    nombre: string;
  };
}

export type PacienteSinEmpresa = Omit<PacienteConEmpresa, "empresa">;

export type PacienteLite = Pick<
  Paciente,
  "id" | "nombre" | "apellido" | "numero_identificacion"
>;

export interface PacienteSelector extends PacienteLite {
  seleccionado?: boolean;
}
