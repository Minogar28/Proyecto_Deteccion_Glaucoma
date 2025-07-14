import { useForm } from "@/hooks/useForm";
import { InputBase } from "@/components";
import type { BaseFormProps } from "./config/BaseForm.type";

export default function BaseForm<T extends object>({
  fields,
  initialValues,
  onSubmit,
  validate,
  buttonLabel = "Enviar",
}: BaseFormProps<T>) {
  const { values, errors, loading, handleChange, handleSubmit, submitError } =
    useForm({ initialValues, onSubmit, validate });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className='space-y-4'>
      {fields.map((field) => {
        const key = field.name as keyof T;

        if (field.component === "radio") {
          return (
            <div key={field.name}>
              <label>{field.label}</label>
              {field.options?.map((option) => {
                const label =
                  typeof option === "string" ? option : option.label;
                const value =
                  typeof option === "string" ? option : option.value;
                return (
                  <label key={value}>
                    <input
                      type='radio'
                      name={field.name}
                      value={value}
                      checked={values[key] === value}
                      onChange={(e) =>
                        handleChange(key, e.target.value as T[keyof T])
                      }
                    />
                    {label}
                  </label>
                );
              })}
            </div>
          );
        }

        return (
          <InputBase
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type ?? "text"}
            value={String(values[key])}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(key, e.target.value as T[keyof T]);
            }}
            hasError={!!errors[key]}
            required={field.required}
            disabled={field.disabled}
          />
        );
      })}

      {submitError && (
        <div className='text-red-500 font-medium'>{submitError}</div>
      )}

      <button
        type='submit'
        disabled={loading}
        className='bg-blue-600 text-white px-4 py-2 rounded'>
        {loading ? "Enviando..." : buttonLabel}
      </button>
    </form>
  );
}
