import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export type RadioFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > & {
    label: string;
    id: string;
  };
const StyledRadioField = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  border: 2px solid lightgrey;
  cursor: pointer;
  width: 100%;
  max-width: 40ch;
  padding: 1em;
  border-radius: 0.5rem;
  &
`;
const LabelText = styled.div`
  margin-left: 1rem;
  font-weight: 700;
`;
const Input = styled.input`
  color: orange;
`;
export const RadioField = React.forwardRef<HTMLInputElement, RadioFieldProps>(
  (props, ref) => {
    return (
      <StyledRadioField htmlFor={props.id}>
        <Input type="radio" {...props} ref={ref} />
        <LabelText>{props.label}</LabelText>
      </StyledRadioField>
    );
  }
);

export default RadioField;
