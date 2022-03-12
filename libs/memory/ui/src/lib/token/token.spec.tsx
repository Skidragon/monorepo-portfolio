import { render } from '@testing-library/react';

import Token from './token';

describe('Token', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Token />);
    expect(baseElement).toBeTruthy();
  });
});
