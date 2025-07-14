import { useState } from "react";

type UseFormConfig<T extends object> = {
  initialValues: T;
  onSubmit: (values: T) => Promise<void> | void;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
};

export function useForm<T extends object>({
  initialValues,
  onSubmit,
  validate,
}: UseFormConfig<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async () => {
    if (validate) {
      const validationErrors = validate(values);
      const hasErrors = Object.values(validationErrors).some(Boolean);
      if (hasErrors) {
        setErrors(validationErrors);
        return;
      }
    }

    try {
      setLoading(true);
      setSubmitError(null);
      await onSubmit(values);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error inesperado";
      setSubmitError(msg);
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    errors,
    loading,
    submitError, // 👈 lo podés mostrar en tu UI
  };
}
