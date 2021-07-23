import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RoadmapOverviewProps {}

const StyledRoadmapOverview = styled.div`
  color: pink;
`;

export function RoadmapOverview(props: RoadmapOverviewProps) {
  return (
    <StyledRoadmapOverview>
      <h1>Welcome to roadmap-overview!</h1>
    </StyledRoadmapOverview>
  );
}

export default RoadmapOverview;
