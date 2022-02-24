import { render } from '@testing-library/react';

import RoadmapOverview from './roadmap-overview';

describe('RoadmapOverview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RoadmapOverview />);
    expect(baseElement).toBeTruthy();
  });
});
