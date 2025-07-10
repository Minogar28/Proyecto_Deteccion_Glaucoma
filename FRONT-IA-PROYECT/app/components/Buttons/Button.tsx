import BaseButton from "./BaseButton";
import type { BaseButtonProps } from "./config/Button.type";
import { sizeClasses, variantClasses } from "./config/Button.style";

interface MyButtonProps extends BaseButtonProps {
  size?: "md" | "lg";
  variant?: "primary" | "danger" | "secondary";
  icon?: React.ReactNode;
}

export default function Button({
  size = "md",
  variant = "primary",
  children,
  className,
  ...rest
}: MyButtonProps) {
  return (
    <BaseButton
      {...rest}
      className={`font-bold flex items-center gap-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </BaseButton>
  );
}
