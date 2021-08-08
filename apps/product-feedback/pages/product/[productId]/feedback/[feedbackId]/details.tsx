import { useState } from 'react';
import { Stack } from '@sd/react-layout-styled-components';
import styled from 'styled-components';
/* eslint-disable-next-line */
export interface FeedbackDetailsProps {}

const StyledFeedbackDetails = styled(Stack)`
  padding: var(--flow);
`;

export function FeedbackDetails(props: FeedbackDetailsProps) {
  const [category, setCategory] = useState('All');
  return (
    <StyledFeedbackDetails>
      <div />
    </StyledFeedbackDetails>
  );
}

export default FeedbackDetails;
