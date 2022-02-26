import { render } from '@testing-library/react';

import LinkTo from './link-to';

describe('LinkTo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkTo />);
    expect(baseElement).toBeTruthy();
  });
});
