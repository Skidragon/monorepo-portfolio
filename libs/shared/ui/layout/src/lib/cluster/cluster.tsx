import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ClusterProps {}

const StyledCluster = styled.div`
  color: pink;
`;

export function Cluster(props: ClusterProps) {
  return (
    <StyledCluster>
      <h1>Welcome to cluster!</h1>
    </StyledCluster>
  );
}

export default Cluster;
