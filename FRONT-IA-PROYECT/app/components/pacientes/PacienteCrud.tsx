import { useEffect, useState } from "react";
import { loadPacientes } from "@/services/pacientes/loadPacientes";
import type { GridColDef } from "@mui/x-data-grid";
import { CrudPanel } from "@/components";
import FormularioPaciente from "./FormularioPaciente";
import type { PacienteConEmpresa } from "@/types";

const columnasPaciente: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 130 },
  { field: "apellido", headerName: "Apellido", width: 130 },
  { field: "numero_identificacion", headerName: "Identificación", width: 150 },
  { field: "edad", headerName: "Edad", width: 90 },
  { field: "sexo", headerName: "Sexo", width: 90 },
  {
    field: "diabetes",
    headerName: "Diabetes",
    width: 100,
    renderCell: (params) => (params.value ? "Sí" : "No"),
  },
];

export const PacienteCrud = () => {
  const [pacientes, setPacientes] = useState<PacienteConEmpresa[]>([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const data = await loadPacientes();
        setPacientes(data);
      } catch (error) {
        console.error("Error cargando pacientes:", error);
      }
    };

    fetchPacientes();
  }, []);

  const handleEdit = (paciente: PacienteConEmpresa) => {
    console.log("Editar paciente", paciente);
  };

  const handleDelete = (paciente: PacienteConEmpresa) => {
    console.log("Eliminar paciente", paciente);
  };

  return (
    <CrudPanel<PacienteConEmpresa>
      title='Pacientes'
      rows={pacientes}
      columns={columnasPaciente}
      actions={["editar", "eliminar"]}
      onEdit={handleEdit}
      onDelete={handleDelete}
      renderCreateForm={(close) => <FormularioPaciente onSuccess={close} />}
    />
  );
};
