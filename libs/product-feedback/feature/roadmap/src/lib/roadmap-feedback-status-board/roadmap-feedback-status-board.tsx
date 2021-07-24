import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RoadmapFeedbackStatusBoardProps {}

const StyledRoadmapFeedbackStatusBoard = styled.div`
  color: pink;
`;

export function RoadmapFeedbackStatusBoard(
  props: RoadmapFeedbackStatusBoardProps
) {
  return (
    <StyledRoadmapFeedbackStatusBoard>
      <h1>Welcome to roadmap-feedback-status-board!</h1>
    </StyledRoadmapFeedbackStatusBoard>
  );
}

export default RoadmapFeedbackStatusBoard;
