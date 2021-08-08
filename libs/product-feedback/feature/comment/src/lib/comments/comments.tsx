import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommentsProps {}

const StyledComments = styled.div`
  color: pink;
`;

export function Comments(props: CommentsProps) {
  return (
    <StyledComments>
      <h1>Welcome to comments!</h1>
    </StyledComments>
  );
}

export default Comments;
