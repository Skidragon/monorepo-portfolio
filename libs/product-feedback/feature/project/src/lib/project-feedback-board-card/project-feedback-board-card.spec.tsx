import { render } from '@testing-library/react';

import ProjectFeedbackBoardCard from './project-feedback-board-card';

describe('ProjectFeedbackBoardCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectFeedbackBoardCard />);
    expect(baseElement).toBeTruthy();
  });
});
