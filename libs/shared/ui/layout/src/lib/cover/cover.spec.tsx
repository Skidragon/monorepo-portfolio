import { render } from '@testing-library/react';

import Cover from './cover';

describe('Cover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cover />);
    expect(baseElement).toBeTruthy();
  });
});
