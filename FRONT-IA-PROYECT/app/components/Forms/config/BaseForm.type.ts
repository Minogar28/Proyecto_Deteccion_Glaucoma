export interface BaseFormProps {
  fields: FieldConfig[];
  onSubmit: (data: Record<string, any>) => Promise<void>; // o tipo más específico
  buttonLabel?: string;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "number" | "date" | "email";
  required?: boolean;
}
