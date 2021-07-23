import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProjectFeedbackBoardCardProps {}

const StyledProjectFeedbackBoardCard = styled.div`
  color: pink;
`;

export function ProjectFeedbackBoardCard(props: ProjectFeedbackBoardCardProps) {
  return (
    <StyledProjectFeedbackBoardCard>
      <h1>Welcome to project-feedback-board-card!</h1>
    </StyledProjectFeedbackBoardCard>
  );
}

export default ProjectFeedbackBoardCard;
