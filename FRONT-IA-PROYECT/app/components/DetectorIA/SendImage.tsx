import React, { useEffect, useState } from "react";
import {
  Button,
  ImgDropZone,
  InputRadioGroup,
  PacienteModal,
} from "@/components";
import type { Paciente } from "@/types";

type Props = {
  imagen: string | null;
  handleUpload: (file: File) => void;
  handleImage: () => void;
  onDetect: (eye: string, id: number) => void;
  onSelectUser?: () => void;
};

export default function SendImage({
  imagen,
  handleUpload,
  handleImage,
  onDetect,
  onSelectUser,
}: Props) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [selectedEye, setSelectedEye] = useState<string | null>(null);
  const [pacienteSeleccionado, setPacienteSeleccionado] =
    useState<Paciente | null>(null);

  useEffect(() => {
    if (!imagen) setSelectedEye(null);
    console.log(selectedEye);
  }, [imagen]);

  return (
    <div className='relative w-full flex flex-col items-center gap-2'>
      <ImgDropZone
        imagen={imagen}
        handleUpload={handleUpload}
        handleImage={handleImage}
      />

      {imagen && (
        <>
          <PacienteModal
            open={mostrarModal}
            onClose={() => setMostrarModal(false)}
            onSelect={(paciente) => setPacienteSeleccionado(paciente)}
          />
          <InputRadioGroup
            name='eyeSelection'
            label='Selecciona el ojo'
            options={[
              { label: "Ojo izquierdo", value: "OS" },
              { label: "Ojo derecho", value: "OD" },
            ]}
            selectedValue={selectedEye}
            onChange={(e) => setSelectedEye(e.target.value)}
            direction='horizontal'
          />

          <div className='absolute bottom-0 right-0'>
            <Button
              variant='primary'
              size='md'
              onClick={() => {
                send(selectedEye, onDetect, pacienteSeleccionado?.id);
              }}>
              Detectar glaucoma
            </Button>
            <Button
              variant='danger'
              size='md'
              onClick={() => setMostrarModal(true)}>
              Seleccionar paciente
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

const send = (
  eye: string | null,
  onDetect: Props["onDetect"],
  pacienteId: number | undefined
) => {
  if (!eye) return alert("Debes seleccionar el tipo de Ojo");
  if (!pacienteId) return alert("Debes seleccionar un paciente");

  onDetect(eye, pacienteId);
};
