import styled from 'styled-components';
import { useState } from 'react';
import { Feedback, FeedbackProps } from '../feedback/feedback';
import {
  Button,
  Box,
  Dropdown,
  DropdownItem,
} from '@sd/product-feedback-ui-components';
import Link from 'next/link';
import { Stack, Center } from '@sd/react-layout-styled-components';
/* eslint-disable-next-line */
export interface FeedbacksProps {
  loading: boolean;
  data: FeedbackProps[];
  category: string;
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
  background: var(--color-secondary);
  color: white;
`;
const FeedbacksCTA = styled.div`
  display: flex;
  align-items: center;
`;
const media = {
  phone: '23.5em',
  tablet: '48em',
  desktop: '90em',
};
const FeedbacksAmountHeading = styled.h3`
  display: none;
  @media screen and (min-width: ${media.tablet}) {
    display: block;
  }
`;
const OPTIONS: Record<string, string> = {
  MOST_UPVOTES: 'Most Upvotes',
  LEAST_UPVOTES: 'Least Upvotes',
  MOST_COMMENTS: 'Most Comments',
  LEAST_COMMENTS: 'Least Comments',
};
export function Feedbacks({
  loading = true,
  data = [],
  category,
  ...props
}: FeedbacksProps) {
  const [sortItem, setSortItem] = useState<DropdownItem>({
    value: OPTIONS.MOST_UPVOTES,
    label: OPTIONS.MOST_UPVOTES,
  });
  const sortDropdownItems = Object.keys(OPTIONS).map<DropdownItem>((key) => {
    return {
      label: OPTIONS[key],
      value: OPTIONS[key],
    };
  });
  const amountOfFeedbacks = data.length;
  return (
    <StyledContainer {...props}>
      <FeedbacksBar>
        <FeedbacksCTA>
          <FeedbacksAmountHeading>{`${amountOfFeedbacks} Suggestions`}</FeedbacksAmountHeading>
          <Dropdown
            label={'Sort By'}
            selectedItem={sortItem}
            items={sortDropdownItems}
            onSelectedItemChange={(changes) => {
              if (changes && changes?.selectedItem?.value) {
                setSortItem(changes.selectedItem);
              }
            }}
          />
        </FeedbacksCTA>
        <Link href={'/product/1/create-feedback'}>
          <Button variant={'primary'}>+ Add Feedback</Button>
        </Link>
      </FeedbacksBar>
      <Center>
        <StyledFeedbacks>
          {loading ? (
            <Skeleton />
          ) : (
            <>
              {data
                .sort((a, b) => {
                  if (OPTIONS.MOST_COMMENTS === sortItem.value) {
                    return b.commentsAmount - a.commentsAmount;
                  }
                  if (OPTIONS.LEAST_COMMENTS === sortItem.value) {
                    return a.commentsAmount - b.commentsAmount;
                  }
                  if (OPTIONS.LEAST_UPVOTES === sortItem.value) {
                    return a.upvotes - b.upvotes;
                  }
                  return b.upvotes - a.upvotes;
                })
                .map((feedback) => {
                  if (feedback.category !== category && category !== 'All') {
                    return null;
                  }
                  return (
                    <Feedback
                      key={feedback.title}
                      title={feedback.title}
                      description={feedback.description}
                      category={feedback.category}
                      upvotes={feedback.upvotes}
                      commentsAmount={feedback.commentsAmount}
                    />
                  );
                })}
            </>
          )}
        </StyledFeedbacks>
      </Center>
    </StyledContainer>
  );
}

export default Feedbacks;
