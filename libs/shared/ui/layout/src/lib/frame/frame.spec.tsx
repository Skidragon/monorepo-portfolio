import { render } from '@testing-library/react';

import Frame from './frame';

describe('Frame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Frame />);
    expect(baseElement).toBeTruthy();
  });
});
