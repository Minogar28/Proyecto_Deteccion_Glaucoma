import { useEffect, useState } from "react";
import { CrudPanel, FormularioPaciente } from "@/components";
import type { GridColDef } from "@mui/x-data-grid";
import type { Paciente, PacienteFormValues } from "@/types";

const columnasPaciente: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 130 },
  { field: "apellido", headerName: "Apellido", width: 130 },
  { field: "numero_identificacion", headerName: "Identificación", width: 150 },
  { field: "edad", headerName: "Edad", width: 90 },
  { field: "sexo", headerName: "Sexo", width: 100 },
];

export default function PacienteCrud() {
  const [pacientes, setPacientes] = useState<PacienteFormValues[]>([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const data: Paciente[] = [
          {
            id: 1,
            nombre: "Daniel",
            apellido: "Gómez",
            numero_identificacion: "123456789",
            edad: 34,
            sexo: "M",
          },
          {
            id: 2,
            nombre: "Laura",
            apellido: "Cruz",
            numero_identificacion: "987654321",
            edad: 29,
            sexo: "F",
          },
        ];

        setPacientes(data);
      } catch (error) {
        console.error("Error cargando pacientes:", error);
      }
    };

    fetchPacientes();
  }, []);

  const handleEdit = (paciente: Paciente) => {
    console.log("Editar paciente", paciente);
  };

  const handleDelete = (paciente: Paciente) => {
    console.log("Eliminar paciente", paciente);
  };

  const handleView = (paciente: Paciente) => {
    console.log("Ver paciente", paciente);
  };

  return (
    <CrudPanel<Paciente>
      title='pacientes'
      rows={pacientes}
      columns={columnasPaciente}
      actions={["editar", "eliminar", "ver"]}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={handleView}
      renderCreateForm={() => <FormularioPaciente />}
    />
  );
}
