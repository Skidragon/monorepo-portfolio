import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isRequired?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  label: string;
  id: string;
}

const StyledTextField = styled.div`
  display: inline-flex;
  flex-flow: column;
`;

const Label = styled.label`
  font-weight: 700;
`;
const Input = styled.input`
  padding: 1em;
  border: 2px solid lightgrey;
  border-radius: 0.5rem;
  text-transform: capitalize;
  &::placeholder {
    color: grey;
  }
  &:focus {
    outline: 2px solid orange;
  }
`;
const ErrorMessage = styled.div`
  color: var(--error, red);
`;

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      isRequired = false,
      hasError,
      errorMessage,
      label,
      id,
      ...props
    }: TextFieldProps,
    ref
  ) => {
    return (
      <StyledTextField>
        <Label htmlFor={id}>
          {label}
          {isRequired ? '*' : ''}
        </Label>
        <Input type={'text'} id={id} {...props} ref={ref} />
        {hasError && errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : null}
      </StyledTextField>
    );
  }
);

export default TextField;
