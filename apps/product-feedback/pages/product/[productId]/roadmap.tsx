import { RoadmapFeedbackStatusBoard } from '@sd/product-feedback/feature/roadmap';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RoadmapProps {}

const StyledRoadmap = styled.div``;

export function Roadmap(props: RoadmapProps) {
  return (
    <StyledRoadmap>
      <RoadmapFeedbackStatusBoard data={[]} />
    </StyledRoadmap>
  );
}

export default Roadmap;
