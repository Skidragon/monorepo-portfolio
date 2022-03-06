import { render } from '@testing-library/react';

import CartModal from './cart-modal';

describe('CartModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartModal products={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
