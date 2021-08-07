import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StackProps {}

const StyledStack = styled.div`
  color: pink;
`;

export function Stack(props: StackProps) {
  return (
    <StyledStack>
      <h1>Welcome to stack!</h1>
    </StyledStack>
  );
}

export default Stack;
