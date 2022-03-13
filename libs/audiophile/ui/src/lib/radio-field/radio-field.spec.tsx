import { render } from '@testing-library/react';

import RadioField from './radio-field';

describe('RadioField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioField id={'test-id'} label="Test" />);
    expect(baseElement).toBeTruthy();
  });
});
