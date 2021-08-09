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
`;

export function ReplyForm(props: ReplyFormProps) {
  const [reply, setReply] = useState('');
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        value={reply}
        label={`reply to @${props.handle}`}
        id="reply-field"
        onChange={(e) => {
          setReply(e.target.value);
        }}
        placeholder="reply"
      />
      <Button variant="primary" type="submit">
        Post Reply
      </Button>
    </Form>
  );
}

export default ReplyForm;
