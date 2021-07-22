import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UpvoteButtonProps {}

const StyledUpvoteButton = styled.div`
  color: pink;
`;

export function UpvoteButton(props: UpvoteButtonProps) {
  return (
    <StyledUpvoteButton>
      <h1>Welcome to upvote-button!</h1>
    </StyledUpvoteButton>
  );
}

export default UpvoteButton;
