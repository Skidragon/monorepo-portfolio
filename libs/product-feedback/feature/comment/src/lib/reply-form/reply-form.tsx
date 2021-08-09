import styled from 'styled-components';
import { Button, Input } from '@sd/product-feedback-ui-components';
/* eslint-disable-next-line */
export interface ReplyFormProps {}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
`;

export function ReplyForm(props: ReplyFormProps) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input id="reply-field" placeholder="reply" />
      <Button variant="primary" type="submit">
        Post Reply
      </Button>
    </Form>
  );
}

export default ReplyForm;
