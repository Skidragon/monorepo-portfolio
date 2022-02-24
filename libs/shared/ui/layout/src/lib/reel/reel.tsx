import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReelProps {}

const StyledReel = styled.div`
  color: pink;
`;

export function Reel(props: ReelProps) {
  return (
    <StyledReel>
      <h1>Welcome to reel!</h1>
    </StyledReel>
  );
}

export default Reel;
