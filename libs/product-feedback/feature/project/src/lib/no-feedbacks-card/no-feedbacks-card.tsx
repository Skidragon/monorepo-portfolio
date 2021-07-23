import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NoFeedbacksCardProps {}

const StyledNoFeedbacksCard = styled.div`
  color: pink;
`;

export function NoFeedbacksCard(props: NoFeedbacksCardProps) {
  return (
    <StyledNoFeedbacksCard>
      <h1>Welcome to no-feedbacks-card!</h1>
    </StyledNoFeedbacksCard>
  );
}

export default NoFeedbacksCard;
