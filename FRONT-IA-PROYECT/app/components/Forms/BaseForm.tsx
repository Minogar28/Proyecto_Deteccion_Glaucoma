import { useState, type ChangeEvent, type FormEvent } from "react";
import type { BaseFormProps } from "./config/BaseForm.type";

export default function BaseForm({
  fields,
  onSubmit,
  buttonLabel = "Enviar",
}: BaseFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {fields.map((field) => (
        <div key={field.name} className='flex flex-col'>
          <label htmlFor={field.name} className='mb-1 font-semibold'>
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            onChange={handleChange}
            className='border rounded px-3 py-2'
          />
        </div>
      ))}
      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded'>
        {buttonLabel}
      </button>
    </form>
  );
}
