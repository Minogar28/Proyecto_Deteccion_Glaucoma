import type { PacienteFormValues } from "@/types";
import { useState } from "react";

export function usePacienteForm(initialValues?: Partial<PacienteFormValues>) {
  const [values, setValues] = useState<PacienteFormValues>({
    nombre: "",
    apellido: "",
    numero_identificacion: "",
    sexo: "",
    ...initialValues,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof PacienteFormValues, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err: Partial<Record<keyof PacienteFormValues, string>> = {};
    if (!values.nombre) err.nombre = "Nombre obligatorio";
    if (!values.apellido) err.apellido = "Apellido obligatorio";
    if (!values.numero_identificacion)
      err.numero_identificacion = "Identificación requerida";
    if (!values.sexo) err.sexo = "Selecciona sexo";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const reset = () => {
    setValues({
      nombre: "",
      apellido: "",
      numero_identificacion: "",
      sexo: "",
    });
    setErrors({});
  };

  return {
    values,
    setValues,
    handleChange,
    validate,
    errors,
    reset,
    isValid: () => Object.keys(errors).length === 0,
  };
}
