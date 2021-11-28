import { render } from '@testing-library/react';

import FormatQuantity from './format-quantity';

describe('FormatQuantity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormatQuantity />);
    expect(baseElement).toBeTruthy();
  });
});
