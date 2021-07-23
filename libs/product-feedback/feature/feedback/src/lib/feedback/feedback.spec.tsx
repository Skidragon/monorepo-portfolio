import { render } from '@testing-library/react';

import Feedback from './feedback';

describe('Feedback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Feedback />);
    expect(baseElement).toBeTruthy();
  });
});
