import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RadioButtonProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
}

const Container = styled.div`
  width: 100%;
`;
const Label = styled.label<Pick<RadioButtonProps, 'checked'>>`
  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--blue-200, lightblue);
  padding: 1em;
  border-radius: 2rem;
  color: white;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;

  &:checked + label {
    background: var(--blue-400, blue);
  }
  &:focus + label {
    box-shadow: 0px 0px 0px 4px var(--orange, orange);
  }
`;
export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, id, ...props }: RadioButtonProps, ref) => {
    return (
      <Container>
        <Input type="radio" id={id} {...props} ref={ref} />
        <Label htmlFor={id} checked={props.checked}>
          {label}
        </Label>
      </Container>
    );
  }
);

export default RadioButton;
