import { render } from '@testing-library/react';

import ActiveLink from './active-link';

describe('ActiveLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActiveLink />);
    expect(baseElement).toBeTruthy();
  });
});
