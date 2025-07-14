/**
 * Este es un archivo experimental/alterno, revisar y evitar su uso
 */

import BaseForm from "@/components/Forms/BaseForm";
import type { FieldConfig } from "@/components/Forms/config/BaseForm.type";
import type { Paciente } from "@/types";
// import { crearPaciente } from "@/services/pacientes/crearPaciente";

type Props = {
  onSuccess?: () => void;
};

export default function FormularioPaciente({ onSuccess }: Props) {
  const initialValues: Omit<Paciente, "id"> = {
    nombre: "",
    apellido: "",
    numero_identificacion: "",
    sexo: "",
  };

  const fields: FieldConfig<keyof typeof initialValues>[] = [
    { name: "nombre", label: "Nombre", required: true },
    { name: "apellido", label: "Apellido", required: true },
    {
      name: "numero_identificacion",
      label: "Identificación",
      required: true,
    },
    {
      name: "sexo",
      label: "Sexo",
      component: "radio",
      options: [
        { label: "Masculino", value: "M" },
        { label: "Femenino", value: "F" },
      ],
      required: true,
    },
  ];

  const validate = (values: typeof initialValues) => {
    const errors: Partial<Record<keyof typeof values, string>> = {};

    if (!values.nombre) errors.nombre = "Campo obligatorio";
    if (!values.apellido) errors.apellido = "Campo obligatorio";
    if (!values.numero_identificacion)
      errors.numero_identificacion = "Campo obligatorio";
    if (!values.sexo) errors.sexo = "Selecciona el sexo";

    return errors;
  };

  const handleSubmit = async (values: typeof initialValues) => {
    // await crearPaciente(values);
    if (onSuccess) onSuccess();
  };

  return (
    <BaseForm
      fields={fields}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
      buttonLabel='Registrar paciente'
    />
  );
}
