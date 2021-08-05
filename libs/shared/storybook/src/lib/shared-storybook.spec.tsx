import { render } from '@testing-library/react';

import SharedStorybook from './shared-storybook';

describe('SharedStorybook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedStorybook />);
    expect(baseElement).toBeTruthy();
  });
});
