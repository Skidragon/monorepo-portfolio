import { render } from '@testing-library/react';

import LineItem from './line-item';

describe('LineItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LineItem />);
    expect(baseElement).toBeTruthy();
  });
});
