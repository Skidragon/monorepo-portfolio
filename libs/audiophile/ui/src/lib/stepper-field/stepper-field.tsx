import css from './StepperField.module.scss';
import styled from 'styled-components';
export interface StepperFieldProps {
  step: number;
  onChange: (step: number) => void;
  min?: number;
  max?: number;
  incrementBy?: number;
  decrementBy?: number;
  disabled?: boolean;
}
const Stepper = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  & > * {
    border: 2px solid transparent;
    background: var(--light-gray, lightgrey);
    width: 4rem;
    height: 4rem;
    outline: none;
    &:focus {
      border: 2px solid var(--primary-color);
    }
  }
`;
const Button = styled.button`
  color: grey;
  &:hover,
  &:active {
    color: var(--dark-orange, orange);
    font-weight: 700;
  }
`;
const Input = styled.input`
  color: var(--secondary-color, black);
  text-align: center;
  &:hover,
  &:focus-within {
    font-weight: 700;
  }
`;
export const StepperField: React.FC<StepperFieldProps> = ({
  min = 1,
  max = 10,
  step = 1,
  onChange,
  incrementBy = 1,
  decrementBy = 1,
  disabled = false,
}) => {
  const increment = () => {
    if (step + incrementBy > max) return;
    onChange(step + incrementBy);
  };
  const decrement = () => {
    if (step - decrementBy < min) return;

    onChange(step - decrementBy);
  };
  return (
    <Stepper className={css['stepper']}>
      <Button
        disabled={disabled}
        onMouseDown={() => {
          decrement();
        }}
        type={'button'}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            decrement();
          }
        }}
      >
        -
      </Button>
      <Input
        disabled={true}
        type={'text'}
        value={step}
        onChange={(e) => {
          if (/[^\d]/.test(e.target.value)) {
            return;
          }
          const value = Number(e.target.value);
          if (value < min || value > max) return;
          onChange(value);
        }}
      />
      <Button
        disabled={disabled}
        onMouseDown={() => {
          increment();
        }}
        type={'button'}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            increment();
          }
        }}
      >
        +
      </Button>
    </Stepper>
  );
};
