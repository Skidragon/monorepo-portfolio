import { render } from '@testing-library/react';

import SeeProductCard from './see-product-card';

describe('SeeProductCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SeeProductCard
        name="test"
        description="test"
        src="/image-category-page-preview.jpg"
        href="#"
        reverse={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
