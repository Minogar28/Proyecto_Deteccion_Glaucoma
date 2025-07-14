import type { BaseCardProps } from "./config/BaseCard.type";

export default function BaseCard({
  children,
  onClick,
  className,
}: BaseCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden transition hover:shadow-lg cursor-pointer 
        ${className}`}>
      {children}
    </div>
  );
}
