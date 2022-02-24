import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CreateFeedbackFormProps {}

const StyledCreateFeedbackForm = styled.div`
  color: pink;
`;

export function CreateFeedbackForm(props: CreateFeedbackFormProps) {
  return (
    <StyledCreateFeedbackForm>
      <h1>Welcome to create-feedback-form!</h1>
    </StyledCreateFeedbackForm>
  );
}

export default CreateFeedbackForm;
