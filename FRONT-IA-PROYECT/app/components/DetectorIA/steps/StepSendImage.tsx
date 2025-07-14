import {
  Button,
  ImgDropZone,
  InputRadioGroup,
  PacienteModal,
  FormularioPaciente,
} from "@/components";
import { useEffect, useState } from "react";
import type { SendImageProps } from "./StepSendImage.type";

export default function StepSendImage({
  imagen,
  handleUpload,
  handleImage,
  selectedEye,
  setSelectedEye,
  pacienteSeleccionado,
  setPacienteSeleccionado,
  onDetect,
  onSelectUser,
  pacienteFormData,
  setPacienteFormData,
  handlePacienteChange,
  pacienteErrors,
}: SendImageProps) {
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    if (!imagen) setSelectedEye(null);
    if (pacienteSeleccionado) {
      setPacienteFormData({
        nombre: pacienteSeleccionado.nombre,
        apellido: pacienteSeleccionado.apellido,
        numero_identificacion: pacienteSeleccionado.numero_identificacion,
        sexo: pacienteSeleccionado.sexo ?? "",
      });
    }
  }, [imagen, pacienteSeleccionado]);

  return (
    <div className='relative w-full flex flex-col md:flex-row gap-10 items-start'>
      <div className='flex-1 flex flex-col gap-4'>
        <ImgDropZone
          imagen={imagen}
          handleUpload={handleUpload}
          handleImage={handleImage}
        />

        {imagen && (
          <>
            <InputRadioGroup
              name='eyeSelection'
              label='Selecciona el ojo'
              options={[
                { label: "Ojo izquierdo", value: "OS" },
                { label: "Ojo derecho", value: "OD" },
              ]}
              value={selectedEye ?? ""}
              onChange={(e) => setSelectedEye(e.target.value)}
              direction='horizontal'
              required
            />

            <Button
              variant='danger'
              size='md'
              onClick={() => setMostrarModal(true)}>
              Seleccionar paciente
            </Button>
          </>
        )}
      </div>

      {imagen && (
        <div className='flex-1 w-full'>
          <h3 className='font-semibold text-lg mb-2 text-gray-800'>
            Datos del paciente
          </h3>
          <FormularioPaciente
            values={pacienteFormData}
            onChange={handlePacienteChange}
            errors={pacienteErrors}
            disabled={!!pacienteSeleccionado}
          />
        </div>
      )}

      <PacienteModal
        open={mostrarModal}
        onClose={() => setMostrarModal(false)}
        onSelect={setPacienteSeleccionado}
      />
    </div>
  );
}
