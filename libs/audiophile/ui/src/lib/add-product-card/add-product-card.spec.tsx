import { render } from '@testing-library/react';

import AddProductCard from './add-product-card';

describe('AddProductCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AddProductCard
        src="/"
        name="Headphones"
        cents={100}
        description={'Description text'}
      >
        <button>Add to Cart</button>
      </AddProductCard>
    );
    expect(baseElement).toBeTruthy();
  });
});
