import React from 'react';
import styled from 'styled-components';
import { Feedback, FeedbackProps } from '@sd/product-feedback/feature/feedback';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
/* eslint-disable-next-line */
export interface RoadmapFeedbackStatusBoardProps {}

const StyledRoadmapFeedbackStatusBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Column = styled.div`
  display: grid;
  grid-gap: 1rem;
`;
interface DropColumnProps {
  children: React.ReactNode;
}
const DropColumn: React.FunctionComponent<DropColumnProps> = ({ children }) => {
  const [collectedProps, dropRef] = useDrop(() => ({
    accept: 'FEEDBACK',
  }));
  console.log('DropColumn: ', collectedProps);
  return <Column ref={dropRef}>{children}</Column>;
};

const DraggableFeedback: React.FunctionComponent<FeedbackProps> = (props) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'FEEDBACK',
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );
  return <Feedback {...props} ref={dragRef} />;
};
export function RoadmapFeedbackStatusBoard(
  props: RoadmapFeedbackStatusBoardProps
) {
  return (
    <DndProvider backend={HTML5Backend}>
      <StyledRoadmapFeedbackStatusBoard>
        <DropColumn>
          <DraggableFeedback
            title={'More comprehensive reports'}
            description={
              'It would be great to see a more detailed breakdown of solutions.'
            }
            statusType={'PLANNED'}
            showStatus={true}
            isCompactView={true}
          />
          <DraggableFeedback
            title={'Learning Paths'}
            description={
              'Sequenced projects for different goals to help people improve.'
            }
            statusType={'PLANNED'}
            showStatus={true}
            isCompactView={true}
          />
        </DropColumn>
        <DropColumn>
          <DraggableFeedback
            title={'One-click portfolio generation'}
            description={
              'Add ability to create professional looking portfolio from profile.'
            }
            statusType={'IN_PROGRESS'}
            showStatus={true}
            isCompactView={true}
          />
          <DraggableFeedback
            title={'Bookmark challenges'}
            description={'Be able to bookmark challenges to take later on.'}
            statusType={'IN_PROGRESS'}
            showStatus={true}
            isCompactView={true}
          />
        </DropColumn>
        <DropColumn>
          <DraggableFeedback
            title={'Add micro-interactions'}
            description={'Small animations at specific points can add delight.'}
            statusType={'LIVE'}
            showStatus={true}
            isCompactView={true}
          />
        </DropColumn>
      </StyledRoadmapFeedbackStatusBoard>
    </DndProvider>
  );
}

export default RoadmapFeedbackStatusBoard;
