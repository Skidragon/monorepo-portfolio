import { render } from '@testing-library/react';

import InterestedToContactMeSection from './interested-to-contact-me-section';

describe('InterestedToContactMeSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InterestedToContactMeSection />);
    expect(baseElement).toBeTruthy();
  });
});
