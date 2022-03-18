import { render } from '@testing-library/react';

import MemoryShared from './memory-shared';

describe('MemoryShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MemoryShared />);
    expect(baseElement).toBeTruthy();
  });
});
