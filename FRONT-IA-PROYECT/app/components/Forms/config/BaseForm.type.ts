export type BaseFormProps<T extends Record<string, any>> = {
  fields: FieldConfig<Extract<keyof T, string>>[];
  initialValues: T;
  onSubmit: (values: T) => Promise<void> | void;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
  buttonLabel?: string;
};

export type BaseFieldType = "text" | "email" | "password" | "radio" | "select";

export type FieldOption = {
  label: string;
  value: string;
};

export type FieldConfig<K extends string = string> = {
  name: K;
  label: string;
  type?: BaseFieldType;
  component?: "input" | "radio" | "select";
  options?: string[] | FieldOption[];
  required?: boolean;
  disabled?: boolean;
};
