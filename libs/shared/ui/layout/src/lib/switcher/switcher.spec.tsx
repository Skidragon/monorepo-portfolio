import { render } from '@testing-library/react';

import Switcher from './switcher';

describe('Switcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Switcher />);
    expect(baseElement).toBeTruthy();
  });
});
