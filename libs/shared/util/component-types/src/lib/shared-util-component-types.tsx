import { JSXElementConstructor, ReactElement } from 'react';

export interface ButtonExtended {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error';
  Icon?: ReactElement<any, string | JSXElementConstructor<any>>;
}

interface BaseField {
  errorMessage: string;
  hasError: boolean;
}
export type TextFieldExtended = BaseField;
