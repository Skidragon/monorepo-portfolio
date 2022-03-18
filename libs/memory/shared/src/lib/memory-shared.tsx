import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MemorySharedProps {}

const StyledMemoryShared = styled.div`
  color: pink;
`;

export function MemoryShared(props: MemorySharedProps) {
  return (
    <StyledMemoryShared>
      <h1>Welcome to memory-shared!</h1>
    </StyledMemoryShared>
  );
}

export default MemoryShared;
