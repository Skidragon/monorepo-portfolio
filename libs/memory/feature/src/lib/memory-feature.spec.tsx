import { render } from '@testing-library/react';

import MemoryFeature from './memory-feature';

describe('MemoryFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MemoryFeature />);
    expect(baseElement).toBeTruthy();
  });
});
