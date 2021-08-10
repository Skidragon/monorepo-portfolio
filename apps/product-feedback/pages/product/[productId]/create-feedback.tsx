import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CreateFeedbackProps {}

const StyledCreateFeedback = styled.div`
  color: pink;
`;

export function CreateFeedback(props: CreateFeedbackProps) {
  return (
    <StyledCreateFeedback>
      <h1>Welcome to create-feedback!</h1>
    </StyledCreateFeedback>
  );
}

export default CreateFeedback;
