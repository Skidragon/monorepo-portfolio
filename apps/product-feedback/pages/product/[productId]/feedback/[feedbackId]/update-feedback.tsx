import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UpdateFeedbackProps {}

const StyledUpdateFeedback = styled.div`
  color: pink;
`;

export function UpdateFeedback(props: UpdateFeedbackProps) {
  return (
    <StyledUpdateFeedback>
      <h1>Welcome to update-feedback!</h1>
    </StyledUpdateFeedback>
  );
}

export default UpdateFeedback;
