import { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from '@sd/product-feedback-ui-components';
/* eslint-disable-next-line */
export interface ReplyFormProps {
  handle: string;
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  align-items: flex-start;
`;
const Textarea = styled.textarea`
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: 1em 1rem;
  font-size: 1em;
  border-radius: 6px;
  width: 100%;
  border: none;
`;
export function ReplyForm(props: ReplyFormProps) {
  const [reply, setReply] = useState('');
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Textarea
        rows={3}
        value={reply}
        placeholder={`@${props.handle}`}
        onChange={(e) => {
          setReply(e.target.value);
        }}
      />
      <Button variant="primary" type="submit">
        Post Reply
      </Button>
    </Form>
  );
}

export default ReplyForm;
