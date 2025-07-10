import React from "react";

interface Option {
  label: string;
  value: string;
}

interface InputSelectProps {
  name: string;
  label: string;
  options: Option[];
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function InputSelect({
  name,
  label,
  options,
  required = false,
  onChange,
}: InputSelectProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='text-sm font-medium'>
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        onChange={onChange}
        className='p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'>
        <option value=''>Seleccione una opción</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
