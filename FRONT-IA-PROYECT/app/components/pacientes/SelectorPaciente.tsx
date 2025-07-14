import { useEffect, useState } from "react";
import { SelectorTable, SpinnerBase } from "@/components";
import type { GridColDef } from "@mui/x-data-grid";
import { loadPacientes } from "@/services/pacientes/loadPacientes";
import type { PacienteSelector } from "@/types";
import { useLoadFetch } from "@/hooks/useLoadFetch";

type propsSelectorPaciente<> = {
  onSelect: (paciente: PacienteSelector) => void;
};

const columnasSelector: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 130 },
  { field: "apellido", headerName: "Apellido", width: 130 },
  { field: "numero_identificacion", headerName: "Identificación", width: 150 },
];

export const SelectorPaciente = ({ onSelect }: propsSelectorPaciente) => {
  const {
    data: pacientes,
    loading,
    error,
  } = useLoadFetch<PacienteSelector>({
    fetchFunction: loadPacientes,
  });

  return (
    <>
      {loading && <SpinnerBase size='lg' />}
      {!loading && (
        <SelectorTable<PacienteSelector>
          rows={pacientes}
          columns={columnasSelector}
          onSelect={onSelect}
          checkboxSelection={false}
        />
      )}
    </>
  );
};
