import { render } from '@testing-library/react';

import RoadmapFeedbackStatusTabs from './roadmap-feedback-status-tabs';

describe('RoadmapFeedbackStatusTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RoadmapFeedbackStatusTabs />);
    expect(baseElement).toBeTruthy();
  });
});
