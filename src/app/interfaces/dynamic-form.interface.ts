export interface FormField {
  type: string;
  max?: number;
  label: string;
  name: string;
  nested?: string;
  options?: string[];
  defaultValue?: string | number | boolean;
  validators?: IValidators;
}

export interface IValidators {
  [key: string]: boolean | number;
}
export interface FormOption {
  value: string;
  label: string;
  fields: FormField[];
}

export interface FormData {
  value: string;
  label: string;
  fields: FormField[];
}
