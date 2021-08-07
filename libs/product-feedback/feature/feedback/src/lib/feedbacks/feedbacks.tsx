import styled from 'styled-components';
import { useState } from 'react';
import { Feedback } from '../feedback/feedback';
import { Button, Box, Dropdown } from '@sd/product-feedback-ui-components';
import { Stack } from '@sd/react-layout-styled-components';
/* eslint-disable-next-line */
export interface FeedbacksProps {
  loading: boolean;
  data: any[];
}

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  & > * {
    margin-bottom: 1rem;
  }
`;
const StyledFeedbacks = styled(Stack)`
  display: flex;
  flex-flow: column;
  & > * {
    margin-bottom: 1rem;
  }
  width: 100%;
  height: 100%;
`;
const Skeleton = styled.div`
  @keyframes pulse {
    0% {
      background-color: grey;
    }
    100% {
      background-color: lightgrey;
    }
  }
  animation: pulse 1s infinite alternate-reverse;
  height: 100vh;
  width: 100%;
  border-radius: 6px;
`;
const FeedbacksBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 2em 1em;
  background: blue;
  color: white;
`;
const FeedbacksCTA = styled.div`
  display: flex;
  align-items: center;
`;
const FeedbacksAmountHeading = styled.h3``;
const OPTIONS = {
  MOST_UPVOTES: 'Most Upvotes',
  LEAST_UPVOTES: 'Least Upvotes',
  MOST_COMMENTS: 'Most Comments',
  LEAST_COMMENTS: 'Least Comments',
};
export function Feedbacks({
  loading = true,
  data = [],
  ...props
}: FeedbacksProps) {
  const [sortValue, setSortValue] = useState(OPTIONS.MOST_UPVOTES || '');
  const amountOfFeedbacks = data.length;
  return (
    <StyledContainer {...props}>
      <FeedbacksBar>
        <FeedbacksCTA>
          <FeedbacksAmountHeading>{`${amountOfFeedbacks} Suggestions`}</FeedbacksAmountHeading>
        </FeedbacksCTA>
        <Button variant={'primary'}>+ Add Feedback</Button>
      </FeedbacksBar>
      <StyledFeedbacks>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Feedback
              title={'Latin'}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae quisquam excepturi nostrum cum earum aspernatur maiores dolores, quaerat neque!'
              }
            />
            <Feedback
              title={'Latin'}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae quisquam excepturi nostrum cum earum aspernatur maiores dolores, quaerat neque!'
              }
            />
            <Feedback
              title={'Latin'}
              description={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae quisquam excepturi nostrum cum earum aspernatur maiores dolores, quaerat neque!'
              }
            />
          </>
        )}
      </StyledFeedbacks>
    </StyledContainer>
  );
}

export default Feedbacks;
