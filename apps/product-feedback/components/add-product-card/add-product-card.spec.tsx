import { render } from '@testing-library/react';

import AddProductCard from './add-product-card';

describe('AddProductCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddProductCard />);
    expect(baseElement).toBeTruthy();
  });
});
