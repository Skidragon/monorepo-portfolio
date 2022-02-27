import { render } from '@testing-library/react';

import ShopCategoryCard from './shop-category-card';

describe('ShopCategoryCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShopCategoryCard />);
    expect(baseElement).toBeTruthy();
  });
});
