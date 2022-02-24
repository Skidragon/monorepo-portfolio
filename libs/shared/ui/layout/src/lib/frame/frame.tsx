import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrameProps {}

const StyledFrame = styled.div`
  color: pink;
`;

export function Frame(props: FrameProps) {
  return (
    <StyledFrame>
      <h1>Welcome to frame!</h1>
    </StyledFrame>
  );
}

export default Frame;
