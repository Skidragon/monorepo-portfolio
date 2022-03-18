import { render } from '@testing-library/react';

import MemoryUi from './memory-ui';

describe('MemoryUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MemoryUi />);
    expect(baseElement).toBeTruthy();
  });
});
