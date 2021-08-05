import React from 'react';
import styled from 'styled-components';
import { Feedback, FeedbackProps } from '@sd/product-feedback/feature/feedback';
import { useDrop, useDrag } from 'react-dnd';
import { useFeedbackStatusBoard } from './feedback-status-board-provider';
import { FeedbackStatusType } from '@sd/product-feedback/util/types';
export const ITEM_TYPES = {
  FEEDBACK: 'feedback',
};
const Column = styled.div`
  display: flex;
  flex-flow: column;
  & > * {
    padding-bottom: 1rem;
  }
  min-height: 100vh;
`;
interface DropColumnProps {
  description: string;
  statusType: FeedbackStatusType;
  id: string;
}
const PreviewFeedback = styled(Feedback)`
  opacity: 0.4;
`;

export const DropFeedbackStatusColumn: React.FunctionComponent<DropColumnProps> =
  ({ description, statusType, id }) => {
    const { state, dispatch } = useFeedbackStatusBoard();
    const feedbacks = state[statusType].feedbacks;
    const [{ highlight, isOver, item }, dropRef] = useDrop(
      () => ({
        accept: ITEM_TYPES.FEEDBACK,
        drop: (item: Required<FeedbackProps>, monitor) => {
          if (monitor.isOver({ shallow: true })) {
            console.table({
              name: 'column',
              toIndex: feedbacks.length,
            });
            dispatch({
              type: 'UPDATE_FEEDBACK_PLACEMENT',
              payload: {
                title: item.title,
                currentStatus: item.statusType,
                newStatus: statusType,
                toIndex: feedbacks.length,
              },
            });
          }
        },
        collect: (monitor) => ({
          item: monitor.getItem(),
          highlight: monitor.isOver(),
          isOver: monitor.isOver({
            shallow: true,
          }),
        }),
      }),
      [feedbacks.length]
    );
    const feedbacksTotal = feedbacks.length;
    return (
      <div>
        <h2>
          {statusType || ''} (
          <span data-testid={`${id}-feedbacks-total`}>{feedbacksTotal}</span>)
        </h2>
        <p>{description}</p>
        <Column
          style={{
            background: highlight ? 'lightgrey' : 'none',
          }}
          ref={dropRef}
          data-testid={`${id}-column`}
        >
          {feedbacks.map((feedback, index) => {
            return (
              <DraggableFeedback
                title={feedback.title}
                description={feedback.description}
                statusType={statusType}
                key={feedback.title}
                position={index}
              />
            );
          })}
          {isOver && (
            <PreviewFeedback
              title={item.title}
              description={item.description}
              isCompactView={true}
              statusType={statusType}
              showStatus={true}
            />
          )}
        </Column>
      </div>
    );
  };
type DraggableFeedbackProps = FeedbackProps & {
  position: number;
  statusType: FeedbackStatusType;
};
type StyledDraggableFeedbackProps = { show: boolean };

const StyledDraggableFeedback = styled(Feedback)<StyledDraggableFeedbackProps>`
  display: ${(props) => (props.show ? 'grid' : 'none')};
  cursor: move;
`;
const DraggableFeedback: React.FunctionComponent<DraggableFeedbackProps> = ({
  title,
  description,
  statusType,
  position,
  ...rest
}) => {
  const { dispatch } = useFeedbackStatusBoard();
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ITEM_TYPES.FEEDBACK,
      item: {
        title,
        description,
        statusType,
      },

      collect: (monitor) => ({
        isDragging: !monitor.isDragging(),
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [title, description, statusType]
  );
  const [{ isOver, item }, dropRef] = useDrop(
    () => ({
      accept: ITEM_TYPES.FEEDBACK,
      drop: (item: Required<FeedbackProps>, monitor) => {
        console.table({
          name: 'feedback',
          title: item.title,
          fromStatus: item.statusType,
          toStatus: statusType,
          position: position,
          toIndex: position,
        });
        dispatch({
          type: 'UPDATE_FEEDBACK_PLACEMENT',
          payload: {
            title: item.title,
            currentStatus: item.statusType,
            newStatus: statusType,
            toIndex: position,
          },
        });
      },
      collect: (monitor) => ({
        item: monitor.getItem(),
        highlight: monitor.isOver(),
        isOver: monitor.isOver(),
      }),
    }),
    [statusType, dispatch, position]
  );
  return (
    <div ref={dropRef}>
      {isOver && (
        <PreviewFeedback
          title={item.title}
          description={item.description}
          isCompactView={true}
          statusType={statusType}
          showStatus={true}
        />
      )}
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
    </div>
  );
};
