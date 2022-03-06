import styled from 'styled-components';
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
/* eslint-disable-next-line */
type Context = {
  quantity: number;
  min: number;
  max: number;
};
export type StepperFieldProps = {
  [K in keyof Context]?: Context[K];
};
type IncreaseEvent = {
  type: 'INCREASE';
  quantity: number;
};
type DecreaseEvent = {
  type: 'DECREASE';
  quantity: number;
};

type Event = IncreaseEvent | DecreaseEvent;

const initialContext: Context = {
  quantity: 0,
  min: 0,
  max: 50,
};
const machine = createMachine<Context, Event>({
  initial: 'idle',
  context: initialContext,
  states: {
    idle: {
      on: {
        INCREASE: {
          cond: (ctx) => Boolean(ctx.quantity < ctx.max),
          actions: assign<Context, IncreaseEvent>({
            quantity: (ctx) => ctx.quantity + 1,
          }),
        },
        DECREASE: {
          cond: (ctx) =>
            ctx.min
              ? Boolean(ctx.quantity > ctx.min)
              : Boolean(ctx.quantity > 0),
          actions: assign<Context, DecreaseEvent>({
            quantity: (ctx) => ctx.quantity - 1,
          }),
        },
      },
    },
  },
});
const StyledStepperField = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #f2f2f2;
  max-width: 10rem;
`;
const Button = styled.button`
  all: unset;
  text-align: center;
  padding: 0.2em;
  cursor: pointer;
  &:hover,
  &:focus {
    color: orange;
    -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 157, 0, 1);
    -moz-box-shadow: 0px 0px 0px 2px rgba(255, 157, 0, 1);
    box-shadow: 0px 0px 0px 2px rgba(255, 157, 0, 1);
  }
`;
const Input = styled.input`
  box-sizing: border-box; /* border, within the width of the element */
  display: block;
  margin: 0;
  width: 100%;
  border: none;
  text-align: center;
  background: none;
  font-weight: 900;
`;
export function StepperField({
  quantity = 0,
  min = 0,
  max = 50,
}: StepperFieldProps) {
  const [state, send] = useMachine(
    machine.withContext({
      quantity,
      min,
      max,
    })
  );
  const { context } = state;
  return (
    <StyledStepperField>
      <Button
        onClick={() =>
          send({
            type: 'DECREASE',
            quantity: 1,
          })
        }
      >
        -
      </Button>
      <Input type="text" disabled={true} value={context.quantity} />
      <Button
        onClick={() =>
          send({
            type: 'INCREASE',
            quantity: 1,
          })
        }
      >
        +
      </Button>
    </StyledStepperField>
  );
}

export default StepperField;
