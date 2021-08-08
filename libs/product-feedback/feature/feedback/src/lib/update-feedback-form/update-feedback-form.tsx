import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UpdateFeedbackFormProps {}

const StyledUpdateFeedbackForm = styled.div`
  color: pink;
`;

export function UpdateFeedbackForm(props: UpdateFeedbackFormProps) {
  return (
    <StyledUpdateFeedbackForm>
      <h1>Welcome to update-feedback-form!</h1>
    </StyledUpdateFeedbackForm>
  );
}

export default UpdateFeedbackForm;
