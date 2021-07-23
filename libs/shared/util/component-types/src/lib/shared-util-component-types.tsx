import { JSXElementConstructor, ReactElement } from 'react';

export type BaseButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export interface ButtonExtended {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'default';
  Icon?: ReactElement<any, string | JSXElementConstructor<any>>;
}

interface BaseField {
  errorMessage?: string;
  hasError?: boolean;
}
export type SelectExtended = BaseField & { label: string };
export type TextFieldExtended = BaseField;
