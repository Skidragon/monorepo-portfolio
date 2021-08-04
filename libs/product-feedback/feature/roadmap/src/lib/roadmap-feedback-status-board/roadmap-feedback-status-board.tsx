import React from 'react';
import styled from 'styled-components';
import { Feedback, FeedbackProps } from '@sd/product-feedback/feature/feedback';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
/* eslint-disable-next-line */
export interface RoadmapFeedbackStatusBoardProps {
  data: FeedbackProps[];
}
export const ITEM_TYPES = {
  FEEDBACK: 'feedback',
};
const StyledRoadmapFeedbackStatusBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  font-family: var(--font-family, sans-serif);
`;

const Column = styled.div`
  display: flex;
  flex-flow: column;
  & > * {
    margin-bottom: 1rem;
  }
  min-height: 100vh;
`;
interface DropColumnProps {
  feedbacks: FeedbackProps[];
  description: string;
  statusType: FeedbackProps['statusType'];
}
const GhostFeedback = styled(Feedback)`
  opacity: 0.4;
`;
const DropColumn: React.FunctionComponent<DropColumnProps> = ({
  feedbacks,
  description,
  statusType,
}) => {
  const [{ highlight, isOver, item }, dropRef] = useDrop(() => ({
    accept: ITEM_TYPES.FEEDBACK,
    collect: (monitor) => ({
      item: monitor.getItem(),
      highlight: monitor.isOver(),
      isOver: monitor.isOver(),
    }),
  }));
  const feedbacksTotal = feedbacks.length;
  return (
    <div>
      <h2>
        {statusType || ''} {`(${feedbacksTotal})`}
      </h2>
      <p>{description}</p>
      <Column
        style={{
          background: highlight ? 'lightgrey' : 'none',
        }}
        ref={dropRef}
      >
        {isOver ? (
          <GhostFeedback
            title={item.title}
            description={item.description}
            statusType={statusType}
            showStatus={true}
            isCompactView={true}
          />
        ) : null}
        {feedbacks.map((feedback) => {
          return (
            <DraggableFeedback
              title={feedback.title}
              description={feedback.description}
              statusType={statusType}
              key={feedback.title}
            />
          );
        })}
      </Column>
    </div>
  );
};
type DraggableFeedbackProps = FeedbackProps;
type StyledDraggableFeedbackProps = { show: boolean };

const StyledDraggableFeedback = styled(Feedback)<StyledDraggableFeedbackProps>`
  display: ${(props) => (props.show ? 'grid' : 'none')};
  cursor: move;
`;
const DraggableFeedback: React.FunctionComponent<DraggableFeedbackProps> = ({
  title,
  description,
  statusType,
  ...rest
}) => {
  const [{ opacity, isDragging }, dragRef] = useDrag(
    () => ({
      type: ITEM_TYPES.FEEDBACK,
      item: {
        title,
        description,
      },
      collect: (monitor) => ({
        isDragging: !monitor.isDragging(),
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [title, description]
  );
  return (
    <StyledDraggableFeedback
      {...rest}
      show={isDragging}
      title={title}
      description={description}
      statusType={statusType}
      showStatus={true}
      isCompactView={true}
      ref={dragRef}
    />
  );
};

export function RoadmapFeedbackStatusBoard({
  data,
}: RoadmapFeedbackStatusBoardProps) {
  const plannedFeedbacks = data.filter((feedback) => {
    return feedback.statusType === 'PLANNED';
  });
  const inProgressFeedbacks = data.filter((feedback) => {
    return feedback.statusType === 'IN_PROGRESS';
  });
  const liveFeedbacks = data.filter((feedback) => {
    return feedback.statusType === 'LIVE';
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <StyledRoadmapFeedbackStatusBoard>
        <DropColumn
          statusType={'PLANNED'}
          description={'Ideas prioritized for research'}
          feedbacks={plannedFeedbacks}
        />
        <DropColumn
          statusType={'IN_PROGRESS'}
          description={'Currently being developed'}
          feedbacks={inProgressFeedbacks}
        />

        <DropColumn
          statusType={'LIVE'}
          description={'Released features'}
          feedbacks={liveFeedbacks}
        />
      </StyledRoadmapFeedbackStatusBoard>
    </DndProvider>
  );
}

export default RoadmapFeedbackStatusBoard;
