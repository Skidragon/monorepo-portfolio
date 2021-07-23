export interface ButtonExtended {
  variant: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error';
}

interface BaseField {
  errorMessage: string;
  hasError: boolean;
}
export type TextFieldExtended = BaseField;
