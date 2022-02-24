import { render } from '@testing-library/react';

import StepperField from './stepper-field';

describe('StepperField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepperField />);
    expect(baseElement).toBeTruthy();
  });
});
