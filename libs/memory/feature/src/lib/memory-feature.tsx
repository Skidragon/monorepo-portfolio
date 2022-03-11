import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MemoryFeatureProps {}

const StyledMemoryFeature = styled.div`
  color: pink;
`;

export function MemoryFeature(props: MemoryFeatureProps) {
  return (
    <StyledMemoryFeature>
      <h1>Welcome to memory-feature!</h1>
    </StyledMemoryFeature>
  );
}

export default MemoryFeature;
