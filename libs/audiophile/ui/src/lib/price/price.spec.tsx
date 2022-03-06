import { render } from '@testing-library/react';

import Price from './price';

describe('Price', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Price />);
    expect(baseElement).toBeTruthy();
  });
});
