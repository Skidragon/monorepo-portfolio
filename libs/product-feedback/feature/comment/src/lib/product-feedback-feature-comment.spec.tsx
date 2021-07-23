import { render } from '@testing-library/react';

import ProductFeedbackFeatureComment from './product-feedback-feature-comment';

describe('ProductFeedbackFeatureComment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductFeedbackFeatureComment />);
    expect(baseElement).toBeTruthy();
  });
});
