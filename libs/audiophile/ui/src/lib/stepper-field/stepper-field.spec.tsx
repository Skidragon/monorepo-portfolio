import { render, fireEvent } from '@testing-library/react';

import StepperField from './stepper-field';

describe('StepperField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StepperField />);
    expect(baseElement).toBeTruthy();
  });
  it('should show the min value', () => {
    const { getByDisplayValue } = render(
      <StepperField min={2} max={4} id={'test'} />
    );
    expect(getByDisplayValue('2')).toBeTruthy();
  });
  it('incrementor and decrementor should fire', () => {
    const handleIncrease = jest.fn();
    const handleDecrease = jest.fn();
    const { getByText } = render(
      <StepperField
        min={2}
        max={4}
        id={'test'}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    );
    const incrementer = getByText('+');
    fireEvent.click(incrementer);
    expect(handleIncrease).toHaveBeenCalledTimes(1);

    const decrementer = getByText('-');
    fireEvent.click(decrementer);
    expect(handleDecrease).toHaveBeenCalledTimes(1);
  });
  it('should increment', () => {
    const { getByText, getByDisplayValue } = render(
      <StepperField min={2} max={4} id={'test'} />
    );
    expect(getByDisplayValue('2').getAttribute('value')).toBe('2');

    const incrementButton = getByText('+');
    fireEvent.click(incrementButton);
    expect(getByDisplayValue('3').getAttribute('value')).toBe('3');
  });
});
