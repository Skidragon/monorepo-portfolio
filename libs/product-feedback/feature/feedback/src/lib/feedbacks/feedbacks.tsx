import styled from 'styled-components';
import { useState } from 'react';
import { Feedback } from '../feedback/feedback';
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
  background: var(--color-secondary);
  color: white;
`;
const FeedbacksCTA = styled.div`
  display: flex;
  align-items: center;
`;
const FeedbacksAmountHeading = styled.h3``;
const OPTIONS: Record<string, string> = {
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
        <Link href={'/product/1/add-feedback'}>
          <Button variant={'primary'}>+ Add Feedback</Button>
        </Link>
      </FeedbacksBar>
      <Center>
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
      </Center>
    </StyledContainer>
  );
}

export default Feedbacks;
