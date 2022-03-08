import { render } from '@testing-library/react';

import GoBackLink from './go-back-link';

describe('GoBackLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoBackLink />);
    expect(baseElement).toBeTruthy();
  });
});
