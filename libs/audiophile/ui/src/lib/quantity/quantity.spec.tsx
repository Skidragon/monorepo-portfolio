import { render } from '@testing-library/react';

import { formatQuantity, Quantity } from './quantity';

describe('Quantity', () => {
  it('should format correctly', () => {
    expect(formatQuantity(3)).toBe('x3');
  });
  it('should render successfully', () => {
    const { baseElement } = render(<Quantity quantity={3} />);
    expect(baseElement).toBeTruthy();
  });
  it('should format quantity value', () => {
    const { getByText } = render(<Quantity quantity={4} />);
    expect(getByText(/x4/)).toBeTruthy();
  });
});
