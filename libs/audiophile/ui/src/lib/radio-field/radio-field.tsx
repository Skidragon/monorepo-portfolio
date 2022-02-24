import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
/* eslint-disable-next-line */
export interface RadioFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  formValue?: string;
  props?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const StyledRadioField = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.4em;
  border-radius: 50%;
  outline: 3px solid var(--light-gray, grey);
  transition: 0.2s all linear;
  margin: 0;
  margin-right: 0.5em;
  position: relative;
  &:checked {
    background: orange;
  }
`;
const Label = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  outline: 2px solid var(--grey, grey);
  border-radius: 12px;
`;
const RadioInput = styled.input`
  -moz-appearance: none;
  appearance: none;
  padding: 0.4em;
  border-radius: 50%;
  outline: 3px solid var(--light-gray, grey);
  transition: 0.2s all linear;
  margin: 0;
  margin-right: 0.5em;
  position: relative;
  &:checked {
    background: orange;
  }
`;
export const RadioField = React.forwardRef<HTMLInputElement, RadioFieldProps>(
  ({ id, name, value, props }: RadioFieldProps, ref) => {
    return (
      <StyledRadioField>
        <Label htmlFor={id} />
        <RadioInput
          type="radio"
          name={name}
          id={id}
          value={value}
          {...props}
          ref={ref}
        />
      </StyledRadioField>
    );
  }
);

export default RadioField;
