import { render } from '@testing-library/react';

import GlobalStyle from './global-style';

describe('GlobalStyle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlobalStyle />);
    expect(baseElement).toBeTruthy();
  });
});
