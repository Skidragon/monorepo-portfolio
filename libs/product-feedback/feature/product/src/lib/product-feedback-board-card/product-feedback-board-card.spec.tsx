import { render } from '@testing-library/react';

import ProjectFeedbackBoardCard from './product-feedback-board-card';

describe('ProjectFeedbackBoardCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectFeedbackBoardCard />);
    expect(baseElement).toBeTruthy();
  });
});
