import { render } from '@testing-library/react';

import ProductFeedbackFeatureRoadmap from './product-feedback-feature-roadmap';

describe('ProductFeedbackFeatureRoadmap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductFeedbackFeatureRoadmap />);
    expect(baseElement).toBeTruthy();
  });
});
