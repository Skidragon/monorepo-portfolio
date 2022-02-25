import { render } from '@testing-library/react';

import MobileMenu from './mobile-menu';

describe('MobileMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileMenu />);
    expect(baseElement).toBeTruthy();
  });
});
