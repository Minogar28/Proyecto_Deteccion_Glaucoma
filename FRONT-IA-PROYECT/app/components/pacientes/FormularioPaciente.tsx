import { usePacienteForm } from "@/hooks/usePacienteForm";
import type { PacienteFormValues } from "@/types";
import { InputBase, InputRadioGroup } from "@/components";

type Props = {
  values?: PacienteFormValues; // solo si `managedExternally`
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Partial<Record<keyof PacienteFormValues, string>>;
  disabled?: boolean;
  onSuccess?: () => void;
  managedExternally?: boolean;
};

export default function FormularioPaciente({
  values,
  onChange,
  errors = {},
  disabled = false,
  onSuccess,
  managedExternally = false,
}: Props) {
  const {
    values: internalValues,
    handleChange: internalChange,
    errors: internalErrors,
    validate,
    reset,
  } = usePacienteForm();

  const campos = managedExternally ? values! : internalValues;
  const cambios = managedExternally ? onChange! : internalChange;
  const errores = managedExternally ? errors : internalErrors;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = managedExternally ? true : validate();
    if (!isValid) return;

    console.log("Paciente creado:", campos);
    if (onSuccess) onSuccess();
    if (!managedExternally) reset();
  };

  return (
    <form
      className='space-y-5 max-w-md bg-white p-6 rounded shadow'
      onSubmit={handleSubmit}>
      <InputBase
        name='nombre'
        label='Nombre'
        type='text'
        value={campos.nombre}
        onChange={cambios}
        hasError={!!errores.nombre}
        required
        disabled={disabled}
      />
      <InputBase
        name='apellido'
        label='Apellido'
        type='text'
        value={campos.apellido}
        onChange={cambios}
        hasError={!!errores.apellido}
        required
        disabled={disabled}
      />
      <InputBase
        name='numero_identificacion'
        label='Identificación'
        type='text'
        value={campos.numero_identificacion}
        onChange={cambios}
        hasError={!!errores.numero_identificacion}
        required
        disabled={disabled}
      />
      <InputRadioGroup
        name='sexo'
        label='Sexo'
        value={campos.sexo}
        onChange={cambios}
        options={[
          { label: "Masculino", value: "M" },
          { label: "Femenino", value: "F" },
        ]}
        required
        direction='horizontal'
      />
      {errores.sexo && (
        <p className='text-red-500 text-sm mt-1'>{errores.sexo}</p>
      )}

      <button type='submit' className='btn btn-primary'>
        {managedExternally ? "Guardar paciente" : "Crear paciente"}
      </button>
    </form>
  );
}
