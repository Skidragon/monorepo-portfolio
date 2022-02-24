import styled from 'styled-components';
import { Box } from '@sd/product-feedback-ui-components';
import React from 'react';
/* eslint-disable-next-line */
export interface NoFeedbacksCardProps {}

const StyledNoFeedbacksCard = styled(Box)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const NoFeedbacksCard = React.forwardRef<
  HTMLDivElement,
  NoFeedbacksCardProps
>((props: NoFeedbacksCardProps, ref) => {
  return (
    <StyledNoFeedbacksCard {...props} ref={ref}>
      <h3>There is no feedback yet.</h3>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
    </StyledNoFeedbacksCard>
  );
});

export default NoFeedbacksCard;
