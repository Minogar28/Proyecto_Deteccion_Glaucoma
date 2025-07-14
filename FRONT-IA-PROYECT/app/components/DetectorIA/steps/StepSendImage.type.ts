import type { Paciente } from "@/types";
import type { PacienteFormValues } from "@/hooks/usePacienteForm";

export type SendImageProps = {
  imagen: string | null;
  handleUpload: (file: File) => void;
  handleImage: () => void;
  selectedEye: string | null;
  setSelectedEye: (eye: string | null) => void;
  pacienteSeleccionado: Paciente | null;
  setPacienteSeleccionado: (paciente: Paciente | null) => void;
  onDetect: (eye: string, id: number | null) => void;
  onSelectUser: () => void;
  pacienteFormData: PacienteFormValues;
  setPacienteFormData: React.Dispatch<React.SetStateAction<PacienteFormValues>>;
  handlePacienteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pacienteErrors?: Partial<Record<keyof PacienteFormValues, string>>;
};
