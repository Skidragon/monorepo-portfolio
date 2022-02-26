import { render } from '@testing-library/react';

import SocialMediaLinks from './social-media-links';

describe('SocialMediaLinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialMediaLinks />);
    expect(baseElement).toBeTruthy();
  });
});
