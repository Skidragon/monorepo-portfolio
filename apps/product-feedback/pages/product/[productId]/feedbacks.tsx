import { useState } from 'react';
import styled from 'styled-components';
import {
  FeedbacksCategoryFilter,
  NoFeedbacksCard,
  Feedbacks as FeedbacksList,
  FeedbackProps,
} from '@sd/product-feedback/feature/feedback';
import { ProductFeedbackBoardCard } from '@sd/product-feedback/feature/product';
import { RoadmapOverview } from '@sd/product-feedback/feature/roadmap';
import { Stack } from '@sd/react-layout-styled-components';

/* eslint-disable-next-line */
export interface FeedbacksProps {}

const StyledFeedbacks = styled(Stack)`
  padding: var(--flow);
`;
const ProductOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--flow);
`;
export function Feedbacks(props: FeedbacksProps) {
  const feedbacks: FeedbackProps[] = [
    {
      title: 'Latin',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aperiam vel temporibus tempora eius omnis eligendi corrupti libero. Ab?',
      category: 'Enhancement',
    },
    {
      title: 'Spanish',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aperiam vel temporibus tempora eius omnis eligendi corrupti libero. Ab?',
      category: 'UI',
    },
  ];
  const availableCategories = feedbacks.reduce((categories, feedback) => {
    return categories.add(feedback.category);
  }, new Set<string>());
  const [category, setCategory] = useState('All');
  const [categoryFilters, setCategoryFilters] = useState([
    'All',
    ...Array.from(availableCategories),
  ]);

  return (
    <StyledFeedbacks>
      <ProductOverviewContainer>
        <ProductFeedbackBoardCard />
        <FeedbacksCategoryFilter
          data={categoryFilters}
          value={category}
          onClick={(_, value) => {
            setCategory(value);
          }}
        />
        <RoadmapOverview />
      </ProductOverviewContainer>
      <FeedbacksList data={feedbacks} loading={false} />
    </StyledFeedbacks>
  );
}

export default Feedbacks;
