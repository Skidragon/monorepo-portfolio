import { Feedback, FeedbackProps } from '@sd/product-feedback/feature/feedback';
import React, { useReducer, createContext, useContext } from 'react';
interface FeedbackStatusBoardContext {
  state: State;
  dispatch: React.Dispatch<Action>;
}
const FeedbackStatusBoard = createContext<FeedbackStatusBoardContext>(
  {} as FeedbackStatusBoardContext
);
interface State {
  PLANNED: {
    feedbacks: FeedbackProps[];
  };
  IN_PROGRESS: {
    feedbacks: FeedbackProps[];
  };
  LIVE: {
    feedbacks: FeedbackProps[];
  };
}
const actionTypes = {
  updateFeedbackPlacement: 'UPDATE_FEEDBACK_PLACEMENT',
};
type UpdateFeedbackPlacementPayload = {
  title: string;
  toIndex: number;
  currentStatus: NonNullable<FeedbackProps['statusType']>;
  newStatus: NonNullable<FeedbackProps['statusType']>;
};
type Action = {
  type: 'UPDATE_FEEDBACK_PLACEMENT';
  payload: UpdateFeedbackPlacementPayload;
};
function moveItem<T>(array: T[], fromIndex: number, toIndex: number): T[] {
  if (array.length === 0) {
    return [];
  }
  if (fromIndex === toIndex) {
    return array;
  }
  const itemToMove = array[fromIndex];
  const itemlessArray = array.filter((_, index) => {
    return fromIndex !== index;
  });
  if (toIndex === 0) {
    return [itemToMove, ...itemlessArray];
  }
  if (toIndex === array.length - 1) {
    return [...itemlessArray, itemToMove];
  }
  return [
    ...itemlessArray.slice(0, toIndex),
    itemToMove,
    ...itemlessArray.slice(toIndex),
  ];
}
function addItem<T>(array: T[], item: T, insertIndex: number): T[] {
  if (array.length === 0) {
    return [item];
  }
  if (insertIndex === 0) {
    return [item, ...array];
  }
  if (insertIndex === array.length) {
    return [...array, item];
  }
  return [...array.slice(0, insertIndex), item, ...array.slice(insertIndex)];
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.updateFeedbackPlacement: {
      const { title, currentStatus, newStatus, toIndex } = action.payload;
      const updateIndex = state[currentStatus].feedbacks.findIndex(
        (feedback) => {
          return feedback.title === title;
        }
      );
      const hasNoChanges =
        updateIndex === toIndex && currentStatus === newStatus;
      if (hasNoChanges) {
        return {
          ...state,
        };
      }
      if (currentStatus === newStatus) {
        return {
          ...state,
          [currentStatus]: {
            feedbacks: moveItem(
              state[currentStatus].feedbacks,
              updateIndex,
              toIndex
            ),
          },
        };
      }
      const feedbackToUpdate = state[currentStatus].feedbacks[updateIndex];
      if (feedbackToUpdate) {
        feedbackToUpdate.statusType = newStatus;
      }

      return {
        ...state,
        [currentStatus]: {
          feedbacks: state[currentStatus].feedbacks.filter((feedback) => {
            return feedback.title !== title;
          }),
        },
        [newStatus]: {
          feedbacks: addItem(
            state[newStatus].feedbacks,
            feedbackToUpdate,
            toIndex
          ),
        },
      };
    }
    default:
      throw new Error(`${action.type} is not a valid action.`);
  }
};

export const FeedbackStatusBoardProvider: React.FunctionComponent<{
  children: React.ReactNode;
  data: FeedbackProps[];
}> = ({ children, data }) => {
  const plannedFeedbacks = data.filter((feedback) => {
    return feedback.statusType === 'PLANNED';
  });
  const inProgressFeedbacks = data.filter((feedback) => {
    return feedback.statusType === 'IN_PROGRESS';
  });
  const liveFeedbacks = data.filter((feedback) => {
    return feedback.statusType === 'LIVE';
  });
  const [state, dispatch] = useReducer(reducer, {
    PLANNED: {
      feedbacks: plannedFeedbacks,
    },
    IN_PROGRESS: {
      feedbacks: inProgressFeedbacks,
    },
    LIVE: {
      feedbacks: liveFeedbacks,
    },
  });
  return (
    <FeedbackStatusBoard.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FeedbackStatusBoard.Provider>
  );
};
FeedbackStatusBoardProvider.displayName = 'FeedbackStatusBoardProvider';
export const useFeedbackStatusBoard = () => {
  const context = useContext(FeedbackStatusBoard);
  if (!context) {
    throw new Error(
      `Must be wrapped in a ${FeedbackStatusBoardProvider.displayName}.`
    );
  }
  return context;
};
