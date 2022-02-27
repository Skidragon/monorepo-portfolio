import { render } from '@testing-library/react';

import Disk from './disk';

describe('Disk', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Disk />);
    expect(baseElement).toBeTruthy();
  });
});
