import { render } from '@testing-library/react';

import OrderConfirmedModal from './order-confirmed-modal';

describe('OrderConfirmedModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderConfirmedModal />);
    expect(baseElement).toBeTruthy();
  });
});
