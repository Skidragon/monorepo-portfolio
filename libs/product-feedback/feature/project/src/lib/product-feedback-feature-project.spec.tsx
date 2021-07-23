import { render } from '@testing-library/react';

import ProductFeedbackFeatureProject from './product-feedback-feature-project';

describe('ProductFeedbackFeatureProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductFeedbackFeatureProject />);
    expect(baseElement).toBeTruthy();
  });
});
