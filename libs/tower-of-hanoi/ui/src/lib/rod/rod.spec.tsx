import { render } from '@testing-library/react';

import Rod from './rod';

describe('Rod', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rod />);
    expect(baseElement).toBeTruthy();
  });
});
