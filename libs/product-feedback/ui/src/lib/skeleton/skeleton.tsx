import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SkeletonProps {}

const StyledSkeleton = styled.div`
  color: pink;
`;

export function Skeleton(props: SkeletonProps) {
  return (
    <StyledSkeleton>
      <h1>Welcome to skeleton!</h1>
    </StyledSkeleton>
  );
}

export default Skeleton;
