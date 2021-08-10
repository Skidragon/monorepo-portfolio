import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RoadmapProps {}

const StyledRoadmap = styled.div`
  color: pink;
`;

export function Roadmap(props: RoadmapProps) {
  return (
    <StyledRoadmap>
      <h1>Welcome to roadmap!</h1>
    </StyledRoadmap>
  );
}

export default Roadmap;
