import { InputBase, InputRadioGroup } from "@/components";
import type { PacienteFormValues } from "@/hooks/usePacienteForm";

type Props = {
  values: PacienteFormValues;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Partial<Record<keyof PacienteFormValues, string>>;
  disabled?: boolean;
};

export default function FormularioPaciente({
  values,
  onChange,
  errors = {},
  disabled = false,
}: Props) {
  return (
    <form className='space-y-5 max-w-md bg-white p-6 rounded shadow'>
      <InputBase
        name='nombre'
        label='Nombre'
        type='text'
        value={values.nombre}
        onChange={onChange}
        hasError={!!errors.nombre}
        required
        disabled={disabled}
      />

      <InputBase
        name='apellido'
        label='Apellido'
        type='text'
        value={values.apellido}
        onChange={onChange}
        hasError={!!errors.apellido}
        required
        disabled={disabled}
      />

      <InputBase
        name='numero_identificacion'
        label='Identificación'
        type='text'
        value={values.numero_identificacion}
        onChange={onChange}
        hasError={!!errors.numero_identificacion}
        required
        disabled={disabled}
      />

      <InputRadioGroup
        name='sexo'
        label='Sexo'
        value={values.sexo}
        onChange={onChange}
        options={[
          { label: "Masculino", value: "M" },
          { label: "Femenino", value: "F" },
        ]}
        required
        direction='horizontal'
      />
      {errors.sexo && (
        <p className='text-red-500 text-sm mt-1'>{errors.sexo}</p>
      )}
    </form>
  );
}
