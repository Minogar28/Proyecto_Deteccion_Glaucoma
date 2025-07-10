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
`;

  return (
    <div>
      {label && (
        <label htmlFor={name} className='text-[16px]'>
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
