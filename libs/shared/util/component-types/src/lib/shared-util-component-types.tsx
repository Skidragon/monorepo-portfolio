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
    | 'outlined'
    | 'text'
    | 'success'
    | 'error'
    | 'default';
  Icon?: ReactElement<any, string | JSXElementConstructor<any>>;
}

export type BaseUList = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;
export type BaseLI = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;
export type BaseDiv = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
interface BaseField {
  errorMessage?: string;
  hasError?: boolean;
}
export type SelectExtended = BaseField & { label: string };
export type TextFieldExtended = BaseField;
