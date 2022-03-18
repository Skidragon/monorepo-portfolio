import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MemoryUiProps {}

const StyledMemoryUi = styled.div`
  color: pink;
`;

export function MemoryUi(props: MemoryUiProps) {
  return (
    <StyledMemoryUi>
      <h1>Welcome to memory-ui!</h1>
    </StyledMemoryUi>
  );
}

export default MemoryUi;
