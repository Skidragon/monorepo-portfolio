import { render } from '@testing-library/react';

import ProductFeedbackFeatureFeedback from './product-feedback-feature-feedback';

describe('ProductFeedbackFeatureFeedback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductFeedbackFeatureFeedback />);
    expect(baseElement).toBeTruthy();
  });
});
