import styled, { css } from 'styled-components';
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
} from 'react';
/* eslint-disable-next-line */
type Context = {
  quantity: number;
  min: number;
  max: number;
  onIncrease?: (value: Context) => void;
  onDecrease?: (value: Context) => void;
};
export type StepperFieldProps = {
  [K in keyof Context]?: Context[K];
} & {
  hasError?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SetValueEvent = {
  type: 'SET_VALUE';
  quantity: number;
};
type IncreaseEvent = {
  type: 'INCREASE';
};
type DecreaseEvent = {
  type: 'DECREASE';
};

type Event = IncreaseEvent | DecreaseEvent | SetValueEvent;

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
          actions: [
            assign<Context, IncreaseEvent>({
              quantity: (ctx) => ctx.quantity + 1,
            }),
            (ctx) => (ctx.onIncrease ? ctx.onIncrease(ctx) : null),
          ],
        },
        DECREASE: {
          cond: (ctx) =>
            ctx.min
              ? Boolean(ctx.quantity > ctx.min)
              : Boolean(ctx.quantity > 0),
          actions: [
            assign<Context, DecreaseEvent>({
              quantity: (ctx) => ctx.quantity - 1,
            }),
            (ctx) => (ctx.onDecrease ? ctx.onDecrease(ctx) : null),
          ],
        },
        SET_VALUE: {
          actions: assign<Context, SetValueEvent>({
            quantity: (ctx) => {
              console.log('SET_VALUE');
              if (ctx.quantity > ctx.max) {
                return ctx.max;
              }
              if (ctx.quantity < ctx.min) {
                return ctx.min;
              }
              return ctx.quantity;
            },
          }),
        },
      },
    },
  },
});
const StyledStepperField = styled.div<Pick<StepperFieldProps, 'hasError'>>`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #f2f2f2;
  max-width: 10rem;
  ${(props) =>
    props.hasError &&
    css`
      -webkit-box-shadow: 0px 0px 0px 2px var(--error);
      -moz-box-shadow: 0px 0px 0px 2px var(--error);
      box-shadow: 0px 0px 0px 2px var(--error);
    `}
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
export const StepperField = React.forwardRef<
  HTMLInputElement,
  StepperFieldProps
>(
  (
    {
      quantity = 0,
      min = 0,
      max = 50,
      hasError,
      onDecrease,
      onIncrease,
      ...props
    },
    ref
  ) => {
    const [state, send] = useMachine(() =>
      machine.withContext({
        quantity,
        min,
        max,
        onIncrease,
        onDecrease,
      })
    );
    const { context } = state;

    useEffect(() => {
      send({
        type: 'SET_VALUE',
        quantity: quantity,
      });
    }, [send, quantity]);

    return (
      <StyledStepperField hasError={hasError}>
        <Button
          onClick={() =>
            send({
              type: 'DECREASE',
            })
          }
          type="button"
        >
          -
        </Button>
        <Input
          type="text"
          disabled={true}
          value={context.quantity}
          {...props}
          ref={ref}
        />
        <Button
          type="button"
          onClick={() =>
            send({
              type: 'INCREASE',
            })
          }
        >
          +
        </Button>
      </StyledStepperField>
    );
  }
);

export default StepperField;
