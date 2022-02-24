import { render } from '@testing-library/react';

import Center from './center';

describe('Center', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Center />);
    expect(baseElement).toBeTruthy();
  });
});
