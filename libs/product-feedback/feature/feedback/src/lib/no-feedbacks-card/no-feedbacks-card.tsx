import styled from 'styled-components';
import { Box, Button } from '@sd/product-feedback-ui-components';
/* eslint-disable-next-line */
export interface NoFeedbacksCardProps {}

const StyledNoFeedbacksCard = styled(Box)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export function NoFeedbacksCard(props: NoFeedbacksCardProps) {
  return (
    <StyledNoFeedbacksCard>
      <h3>There is no feedback yet.</h3>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button variant="primary">Add Feedback</Button>
    </StyledNoFeedbacksCard>
  );
}

export default NoFeedbacksCard;
