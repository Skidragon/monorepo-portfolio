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

const StyledRadioButton = styled.label<Pick<RadioButtonProps, 'checked'>>`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${(props) =>
    props.checked ? 'var(--blue-400, blue)' : 'var(--blue-200, lightblue)'};
  padding: 1em;
  border-radius: 2rem;
  color: white;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
`;

const Label = styled.div``;
const Input = styled.input`
  display: none;
`;
export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, id, ...props }: RadioButtonProps, ref) => {
    return (
      <StyledRadioButton htmlFor={id} checked={props.checked}>
        <Label>{label}</Label>
        <Input type="radio" id={id} {...props} ref={ref} />
      </StyledRadioButton>
    );
  }
);

export default RadioButton;
