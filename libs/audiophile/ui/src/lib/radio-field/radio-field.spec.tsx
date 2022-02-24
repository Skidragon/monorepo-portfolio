import { render } from '@testing-library/react';

import RadioField from './radio-field';

describe('RadioField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioField />);
    expect(baseElement).toBeTruthy();
  });
});
