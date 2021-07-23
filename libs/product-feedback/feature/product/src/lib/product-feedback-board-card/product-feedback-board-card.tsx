import styled from 'styled-components';
import { Button } from '@sd/product-feedback-ui-components';
/* eslint-disable-next-line */
export interface ProjectFeedbackBoardCardProps {}

/*
TODO:
- Use Portal to avoid z-index problems
- Animate it from mobile to tablet

*/
const StyledProjectFeedbackBoardCard = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Headings = styled.div`
  display: flex;
  flex-flow: column;
  text-align: start;
`;
const ProjectHeading = styled.h1``;
const BoardHeading = styled.h2``;
export function ProjectFeedbackBoardCard(props: ProjectFeedbackBoardCardProps) {
  return (
    <StyledProjectFeedbackBoardCard>
      <Headings>
        <ProjectHeading>Frontend Mentor</ProjectHeading>
        <BoardHeading>Feedback Board</BoardHeading>
      </Headings>
      <Button>H</Button>
    </StyledProjectFeedbackBoardCard>
  );
}

export default ProjectFeedbackBoardCard;
