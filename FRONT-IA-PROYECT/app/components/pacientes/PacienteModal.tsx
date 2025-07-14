import { useState } from "react";
import { SelectorPaciente } from "./SelectorPaciente";
import FormularioPaciente from "./FormularioPaciente.alt";
import type { Paciente } from "@/types";
import { ModalWrapper } from "@/components";

type PacienteModalProps = {
  open: boolean;
  onClose: () => void;
  onSelect: (paciente: Paciente) => void;
};

export default function PacienteModal({
  open,
  onClose,
  onSelect,
}: PacienteModalProps) {
  const handleSelect = (paciente: Paciente) => {
    onSelect(paciente);
    onClose();
  };

  return (
    <>
      <ModalWrapper open={open} onClose={onClose} width='600px' height='auto'>
        <div className='relative flex justify-center flex-col'>
          <h2 className='text-lg font-semibold mb-4 text-black'>
            Seleccionar paciente
          </h2>

          {/* <button
            className='absolute top-0 right-0 border border-gray-300 rounded px-3 py-1 text-sm'
            onClick={() => setCrearOpen(true)}>
            + Crear
          </button> */}

          <SelectorPaciente onSelect={handleSelect} />
        </div>
      </ModalWrapper>
    </>
  );
}
