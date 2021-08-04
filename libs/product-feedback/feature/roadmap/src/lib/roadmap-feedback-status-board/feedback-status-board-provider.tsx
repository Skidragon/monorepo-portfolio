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
  positionIndex: number;
  currentStatus: NonNullable<FeedbackProps['statusType']>;
  newStatus: NonNullable<FeedbackProps['statusType']>;
};
type Action = {
  type: 'UPDATE_FEEDBACK_PLACEMENT';
  payload: UpdateFeedbackPlacementPayload;
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.updateFeedbackPlacement: {
      const { title, currentStatus, newStatus, positionIndex } = action.payload;

      const feedbackToUpdate = state[currentStatus].feedbacks.find(
        (feedback) => {
          return feedback.title === title;
        }
      );

      if (feedbackToUpdate) {
        feedbackToUpdate.statusType = newStatus;
      }
      //getFeedback

      return {
        ...state,
        [currentStatus]: {
          feedbacks: state[currentStatus].feedbacks.filter((feedback) => {
            return feedback.title !== title;
          }),
        },
        [newStatus]: {
          feedbacks: feedbackToUpdate
            ? [...state[newStatus].feedbacks, feedbackToUpdate]
            : state[newStatus].feedbacks,
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
