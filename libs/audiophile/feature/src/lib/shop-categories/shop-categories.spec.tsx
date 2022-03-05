import { render } from '@testing-library/react';

import ShopCategories from './shop-categories';

describe('ShopCategories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShopCategories />);
    expect(baseElement).toBeTruthy();
  });
});
