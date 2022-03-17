import { render } from '@testing-library/react';

import RadioButton from './radio-button';

describe('RadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RadioButton id="numbers" label="Numbers" />
    );
    expect(baseElement).toBeTruthy();
  });
  it('should display label', () => {
    const { getByText } = render(<RadioButton id="numbers" label="Numbers" />);
    expect(getByText('Numbers').textContent).toBe('Numbers');
  });
});
