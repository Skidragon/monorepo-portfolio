import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BoxProps {}

const StyledBox = styled.div`
  color: pink;
`;

export function Box(props: BoxProps) {
  return (
    <StyledBox>
      <h1>Welcome to box!</h1>
    </StyledBox>
  );
}

export default Box;
