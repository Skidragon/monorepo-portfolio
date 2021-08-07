import { render } from '@testing-library/react';

import Cluster from './cluster';

describe('Cluster', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cluster />);
    expect(baseElement).toBeTruthy();
  });
});
