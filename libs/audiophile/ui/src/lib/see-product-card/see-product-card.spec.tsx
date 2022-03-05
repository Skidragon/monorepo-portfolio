import { render } from '@testing-library/react';

import SeeProductCard from './see-product-card';

describe('SeeProductCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SeeProductCard />);
    expect(baseElement).toBeTruthy();
  });
});
