import { render } from '@testing-library/react';

import Reel from './reel';

describe('Reel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reel />);
    expect(baseElement).toBeTruthy();
  });
});
