import { render } from '@testing-library/react';

import ProductFeedbackFeatureProduct from './product-feedback-feature-product';

describe('ProductFeedbackFeatureProduct', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductFeedbackFeatureProduct />);
    expect(baseElement).toBeTruthy();
  });
});
