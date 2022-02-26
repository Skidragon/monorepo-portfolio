import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import React from 'react';
/* eslint-disable-next-line */
export interface TextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  isRequired?: boolean;
  hasError?: boolean;
  errorMsg?: string;
}

const StyledTextField = styled.div`
  display: flex;
  flex-flow: column;
`;
const Label = styled.label`
  padding-bottom: 1em;
`;
const Input = styled.input`
  padding: 1em;
`;
const ErrorMessage = styled.div`
  color: var(--error-clr);
`;
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      id,
      isRequired = false,
      hasError,
      errorMsg,
      ...props
    }: TextFieldProps,
    ref
  ) => {
    return (
      <StyledTextField>
        <Label htmlFor={id}>
          {isRequired ? '*' : ''}
          {label}
        </Label>
        <Input
          type="text"
          id={id}
          name={id}
          {...props}
          ref={ref}
          required={isRequired}
        />
        {hasError && <ErrorMessage>{errorMsg}</ErrorMessage>}
      </StyledTextField>
    );
  }
);

export default TextField;
