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
