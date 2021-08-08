import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CreateCommentFormProps {}

const StyledCreateCommentForm = styled.div`
  color: pink;
`;

export function CreateCommentForm(props: CreateCommentFormProps) {
  return (
    <StyledCreateCommentForm>
      <h1>Welcome to create-comment-form!</h1>
    </StyledCreateCommentForm>
  );
}

export default CreateCommentForm;
