import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
import React from 'react';
/* eslint-disable-next-line */
export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  id: string;
  label: string;
  isRequired?: boolean;
  hasError?: boolean;
  errorMsg?: string;
}

const StyledTextArea = styled.div`
  display: flex;
  flex-flow: column;
`;
const Label = styled.label`
  padding-bottom: 1em;
`;
const Input = styled.textarea`
  padding: 1em;
`;
const ErrorMessage = styled.div`
  color: var(--error-clr);
`;
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { id = '', label = '', isRequired = false, ...props }: TextAreaProps,
    ref
  ) => {
    return (
      <StyledTextArea>
        <Label htmlFor={id}>{`${isRequired ? '*' : ''}${label}`}</Label>
        <Input id={id} {...props} ref={ref} />
      </StyledTextArea>
    );
  }
);

export default TextArea;
