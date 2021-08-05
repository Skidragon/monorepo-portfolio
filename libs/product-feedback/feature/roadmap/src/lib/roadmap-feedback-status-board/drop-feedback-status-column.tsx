import React from 'react';
import styled from 'styled-components';
import { Feedback, FeedbackProps } from '@sd/product-feedback/feature/feedback';
import { useDrop, useDrag } from 'react-dnd';
import { useFeedbackStatusBoard } from './feedback-status-board-provider';
import { FeedbackStatusType } from '@sd/product-feedback/util/types';
import { useEffect } from 'react';
import { BaseDiv } from '@sd/react-component-types';
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
    const [{ isOver }, dropRef] = useDrop(
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
          isOver: monitor.isOver(),
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
            background: isOver ? 'lightgrey' : 'none',
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
        </Column>
      </div>
    );
  };
type DraggableFeedbackProps = FeedbackProps & {
  position: number;
  statusType: FeedbackStatusType;
};

const StyledDraggableFeedback = styled(Feedback)`
  position: relative;
  cursor: move;
`;
const OverlayTriggerStyled = styled.div<{
  isOver: boolean;
  isDragging: boolean;
}>`
  height: 50%;
  width: 100%;
  bottom: 0;
  position: absolute;
  z-index: 1000;
  pointer-events: ${(props) => (props.isDragging ? 'unset' : 'none')};
  background: ${(props) => (props.isOver ? 'black' : 'none')};
  opacity: 0.1;
`;
type OverlayTriggerProps = BaseDiv & {
  statusType: FeedbackStatusType;
  position: number;
};
const OverlayTrigger: React.FunctionComponent<OverlayTriggerProps> = (
  props
) => {
  const { state, dispatch } = useFeedbackStatusBoard();

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: ITEM_TYPES.FEEDBACK,
      drop: (item: Required<FeedbackProps>) => {
        dispatch({
          type: 'UPDATE_FEEDBACK_PLACEMENT',
          payload: {
            title: item.title,
            currentStatus: item.statusType,
            newStatus: props.statusType,
            toIndex: props.position,
          },
        });
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [dispatch, props.statusType, props.position]
  );
  return (
    <OverlayTriggerStyled
      isDragging={state.isDragging}
      isOver={isOver}
      ref={dropRef}
      style={props.style}
    />
  );
};
const DraggableFeedback: React.FunctionComponent<DraggableFeedbackProps> = ({
  title,
  description,
  statusType,
  position,
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
        isDragging: monitor.isDragging(),
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [title, description, statusType, dispatch]
  );
  useEffect(() => {
    dispatch({
      type: 'DRAGGING',
      payload: {
        isDragging: isDragging,
        item: {
          title,
          description,
          statusType,
        },
      },
    });
  }, [isDragging, title, description, statusType, dispatch]);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <OverlayTrigger
        style={{
          top: 0,
        }}
        statusType={statusType}
        position={position}
      />
      {isDragging && (
        <PreviewFeedback
          title={title}
          description={description}
          statusType={statusType}
          showStatus={true}
          isCompactView={true}
        />
      )}
      {!isDragging && (
        <StyledDraggableFeedback
          title={title}
          description={description}
          statusType={statusType}
          showStatus={true}
          isCompactView={true}
          ref={dragRef}
        />
      )}
      <OverlayTrigger
        style={{
          bottom: 0,
        }}
        statusType={statusType}
        position={isDragging ? position : position + 1}
      />
    </div>
  );
};
