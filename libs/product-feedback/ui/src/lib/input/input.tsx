import React from 'react';
import styled, { css } from 'styled-components';
/* eslint-disable-next-line */
export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  id: string;
  helperText?: string;
  hasError?: boolean;
  errorMessage?: string;
}
const Container = styled.div`
  --color-error: var(--color-input-error, red);
  display: inline-flex;
  flex-flow: column;
  font-size: 1rem;
`;
const Label = styled.label`
  font-size: 1.5em;
`;
const HelperText = styled.p`
  font-size: 1.25em;
  line-height: 0;
`;
const StyledInput = styled.input<{ hasError: boolean }>`
  ${(props) => {
    if (props.hasError) {
      return css`
        border: 2px solid var(--color-error);
      `;
    }
    return css`
      border: none;
    `;
  }}
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: 1em 1rem;
  font-size: 1em;
  border-radius: 6px;
  width: 100%;
`;
const Error = styled.span`
  color: var(--color-error);
`;
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      helperText = '',
      hasError = false,
      errorMessage = '',
      ...props
    },
    ref
  ) => {
    return (
      <Container>
        <Label aria-label={label} htmlFor={id}>
          {label}
        </Label>
        {helperText ? <HelperText>{helperText}</HelperText> : null}
        <StyledInput
          {...props}
          hasError={hasError}
          placeholder={label}
          id={id}
          ref={ref}
        />
        {hasError && errorMessage ? <Error>{errorMessage}</Error> : null}
      </Container>
    );
  }
);

export default Input;
