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

// export type PacienteFormValues = {
//   nombre: string;
//   apellido: string;
//   numero_identificacion: string;
//   sexo: "" | "M" | "F";
// };

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

export type PacienteFormValues = Omit<
  Paciente,
  "id" | "diabetes" | "id_empresa"
>;

export interface PacienteSelector extends PacienteLite {
  seleccionado?: boolean;
}
