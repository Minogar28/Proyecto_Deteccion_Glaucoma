import { useEffect, useState } from "react";
import { SelectorTable } from "@/components";
import type { GridColDef } from "@mui/x-data-grid";
import { loadPacientes } from "@/services/pacientes/loadPacientes";
import type { PacienteSelector } from "@/types";

const columnasSelector: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 130 },
  { field: "apellido", headerName: "Apellido", width: 130 },
  { field: "numero_identificacion", headerName: "Identificación", width: 150 },
];

export const SelectorPaciente = ({
  onSelect,
}: {
  onSelect: (paciente: PacienteSelector) => void;
}) => {
  const [pacientes, setPacientes] = useState<PacienteSelector[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await loadPacientes();
      setPacientes(data);
    };
    fetch();
  }, []);

  return (
    <SelectorTable<PacienteSelector>
      rows={pacientes}
      columns={columnasSelector}
      onSelect={onSelect}
      checkboxSelection={false}
    />
  );
};
