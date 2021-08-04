import React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FeedbackProps } from '@sd/product-feedback/feature/feedback';

import { DropFeedbackStatusColumn } from './drop-feedback-status-column';
import { FeedbackStatusBoardProvider } from './feedback-status-board-provider';
/* eslint-disable-next-line */
export interface RoadmapFeedbackStatusBoardProps {
  data: FeedbackProps[];
}

const StyledRoadmapFeedbackStatusBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  font-family: var(--font-family, sans-serif);
`;

export function RoadmapFeedbackStatusBoard({
  data,
}: RoadmapFeedbackStatusBoardProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <FeedbackStatusBoardProvider data={data}>
        <StyledRoadmapFeedbackStatusBoard>
          <DropFeedbackStatusColumn
            statusType={'PLANNED'}
            description={'Ideas prioritized for research'}
          />
          <DropFeedbackStatusColumn
            statusType={'IN_PROGRESS'}
            description={'Currently being developed'}
          />

          <DropFeedbackStatusColumn
            statusType={'LIVE'}
            description={'Released features'}
          />
        </StyledRoadmapFeedbackStatusBoard>
      </FeedbackStatusBoardProvider>
    </DndProvider>
  );
}

export default RoadmapFeedbackStatusBoard;
