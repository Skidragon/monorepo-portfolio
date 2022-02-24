import { render } from '@testing-library/react';

import Imposter from './imposter';

describe('Imposter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Imposter />);
    expect(baseElement).toBeTruthy();
  });
});
