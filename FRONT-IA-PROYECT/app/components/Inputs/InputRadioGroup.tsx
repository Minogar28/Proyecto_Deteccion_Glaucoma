import React from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface InputRadioGroupProps {
  name: string;
  label: string;
  options: RadioOption[];
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | null;
  direction?: "vertical" | "horizontal";
}

export default function InputRadioGroup({
  name,
  label,
  options,
  required = false,
  onChange,
  value,
  direction = "vertical",
}: InputRadioGroupProps) {
  const layoutClass =
    direction === "horizontal"
      ? "flex-row flex-wrap items-center gap-4"
      : "flex-col gap-2";

  return (
    <fieldset className={`flex ${layoutClass}`}>
      <legend className='text-sm font-medium text-gray-800'>{label}</legend>
      {options.map((opt) => (
        <label key={opt.value} className='inline-flex items-center gap-2'>
          <input
            type='radio'
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
            required={required}
            className='accent-blue-600'
          />
          <span className=' text-gray-900'>{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
