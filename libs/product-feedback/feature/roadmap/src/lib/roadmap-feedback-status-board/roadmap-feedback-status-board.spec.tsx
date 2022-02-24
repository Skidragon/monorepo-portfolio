import { render } from '@testing-library/react';

import RoadmapFeedbackStatusBoard from './roadmap-feedback-status-board';

describe('RoadmapFeedbackStatusBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RoadmapFeedbackStatusBoard />);
    expect(baseElement).toBeTruthy();
  });
});
