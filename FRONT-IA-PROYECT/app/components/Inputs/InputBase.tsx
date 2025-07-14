import { inputBaseStyles } from "./config/InputBase.style";
import type { InputBaseInterface } from "./config/InputBase.type";

export default function InputBase({
  name,
  label,
  type,
  hasError = false,
  ...rest
}: InputBaseInterface) {
  const baseClass = `
    ${inputBaseStyles.base}
    ${inputBaseStyles.focus}
    ${hasError ? inputBaseStyles.error : ""}
    ${rest.disabled ? inputBaseStyles.disabled : ""}
    ${inputBaseStyles.color} // 👈 estilo de color agregado
  `;

  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label htmlFor={name} className='text-[16px] font-medium text-gray-700'>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        className={baseClass}
        type={type}
        {...rest}
      />
    </div>
  );
}
