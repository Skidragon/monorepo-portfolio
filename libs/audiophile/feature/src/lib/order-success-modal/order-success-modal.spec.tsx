import { render } from '@testing-library/react';

import OrderSuccessModal from './order-success-modal';

describe('OrderSuccessModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderSuccessModal />);
    expect(baseElement).toBeTruthy();
  });
});
