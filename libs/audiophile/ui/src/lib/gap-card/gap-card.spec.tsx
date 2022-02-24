import { render } from '@testing-library/react';

import GapCard from './gap-card';

describe('GapCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GapCard />);
    expect(baseElement).toBeTruthy();
  });
});
