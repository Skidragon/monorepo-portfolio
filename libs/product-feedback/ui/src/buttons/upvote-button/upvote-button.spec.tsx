import { render } from '@testing-library/react';

import UpvoteButton from './upvote-button';

describe('UpvoteButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpvoteButton />);
    expect(baseElement).toBeTruthy();
  });
});
