import { render } from '@testing-library/react';

import NoFeedbacksCard from './no-feedbacks-card';

describe('NoFeedbacksCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoFeedbacksCard />);
    expect(baseElement).toBeTruthy();
  });
});
