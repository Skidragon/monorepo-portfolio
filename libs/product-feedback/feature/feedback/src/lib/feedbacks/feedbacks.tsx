import styled from 'styled-components';
import { useState } from 'react';
import { Feedback } from '@sd/product-feedback/feature/feedback';
import {
  Button,
  Dropdown,
  DropdownOption,
} from '@sd/product-feedback-ui-components';
/* eslint-disable-next-line */
export interface FeedbacksProps {
  loading: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  & > * {
    margin-bottom: 1rem;
  }
`;
const StyledFeedbacks = styled.div`
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
const FeedbackInteractBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2em 1em;
  background: blue;
  color: white;
`;

const OPTIONS = {
  MOST_UPVOTES: 'Most Upvotes',
  LEAST_UPVOTES: 'Least Upvotes',
  MOST_COMMENTS: 'Most Comments',
  LEAST_COMMENTS: 'Least Comments',
};
export function Feedbacks({ loading = true, ...props }: FeedbacksProps) {
  const [sortValue, setSortValue] = useState(OPTIONS.MOST_UPVOTES);
  return (
    <StyledContainer {...props}>
      <FeedbackInteractBar>
        <div>
          <label htmlFor="sort-dropdown">Sort By:</label>
          <Dropdown
            value={sortValue}
            id={'sort-dropdown'}
            onChange={(e) => {
              setSortValue(e.target.value);
            }}
          >
            <DropdownOption value={OPTIONS.MOST_UPVOTES}>
              {OPTIONS.MOST_UPVOTES}
            </DropdownOption>
            <DropdownOption value={OPTIONS.LEAST_UPVOTES}>
              {OPTIONS.LEAST_UPVOTES}
            </DropdownOption>
            <DropdownOption value={OPTIONS.MOST_COMMENTS}>
              {OPTIONS.MOST_COMMENTS}
            </DropdownOption>
            <DropdownOption value={OPTIONS.LEAST_COMMENTS}>
              {OPTIONS.LEAST_COMMENTS}
            </DropdownOption>
          </Dropdown>
        </div>
        <Button variant={'primary'}>Feedback</Button>
      </FeedbackInteractBar>
      <StyledFeedbacks>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Feedback />
            <Feedback />
            <Feedback />
          </>
        )}
      </StyledFeedbacks>
    </StyledContainer>
  );
}

export default Feedbacks;
