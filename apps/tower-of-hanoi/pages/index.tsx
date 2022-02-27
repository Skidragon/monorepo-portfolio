import styled from 'styled-components';
import { Rod, Disk } from '@sd/tower-of-hanoi/ui';
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
type SelectSourceRodEvent = {
  type: 'SELECT_SOURCE_ROD';
  fromIndex: number;
};
type SelectTargetRodEvent = {
  type: 'SELECT_TARGET_ROD';
  toIndex: number;
};
type ResetGameEvent = {
  type: 'RESET';
};
type Event = SelectSourceRodEvent | SelectTargetRodEvent | ResetGameEvent;
type Stack = number[];
type Context = {
  stacks: [Stack, Stack, Stack];
  fromStack: Stack;
  fromIndex: number;
  toIndex: number;
  countMoves: number;
  hasWon: boolean;
};
const initialContext: Context = {
  stacks: [[4, 3, 2, 1], [], []],
  fromStack: [],
  fromIndex: -1,
  toIndex: -1,
  countMoves: 0,
  hasWon: false,
};
const gameMachine = createMachine<Context, Event>({
  initial: 'idle',
  context: initialContext,
  states: {
    idle: {
      on: {
        SELECT_SOURCE_ROD: {
          target: 'chooseTarget',
          actions: assign<Context, SelectSourceRodEvent>({
            fromIndex: (_ctx, { fromIndex }) => fromIndex,
            fromStack: (ctx, { fromIndex }) => ctx.stacks[fromIndex],
          }),
          cond: (ctx, { fromIndex }) => Boolean(ctx.stacks[fromIndex].length),
        },
      },
    },
    chooseTarget: {
      on: {
        SELECT_TARGET_ROD: {
          cond: (ctx, { toIndex }) => {
            const targetStack = ctx.stacks[toIndex];
            if (targetStack.length === 0) {
              return true;
            }
            return targetStack[targetStack.length - 1] >=
              ctx.fromStack[ctx.fromStack.length - 1]
              ? true
              : false;
          },
          target: 'checkWin',
          actions: assign<Context, SelectTargetRodEvent>({
            fromStack: [],
            fromIndex: -1,
            countMoves: (ctx, { toIndex }) =>
              ctx.fromStack !== ctx.stacks[toIndex]
                ? ctx.countMoves + 1
                : ctx.countMoves,
            stacks: (ctx, { toIndex }): [Stack, Stack, Stack] => {
              const { stacks, fromIndex } = ctx;
              const newStacks: [Stack, Stack, Stack] = [
                stacks[0].slice(),
                stacks[1].slice(),
                stacks[2].slice(),
              ];
              const disk = newStacks[fromIndex].pop();
              const targetStack = newStacks[toIndex];
              if (disk) {
                targetStack.push(disk);
              } else {
                return ctx.stacks;
              }
              newStacks[toIndex] = targetStack;
              return newStacks;
            },
          }),
        },
      },
    },
    checkWin: {
      on: {
        '': [
          {
            target: 'win',
            cond: (ctx) => ctx.stacks[2].length === 4,
          },
          {
            target: 'idle',
          },
        ],
      },
    },
    win: {
      entry: assign<Context, Event>({ hasWon: true }),
      on: {
        RESET: {
          target: 'idle',
          actions: assign({
            ...initialContext,
          }),
        },
      },
    },
  },
});
const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;
`;
const GameDashboard = styled.div`
  max-width: 60ch;
`;
const PlayArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  height: 100vh;
  min-height: 15rem;
  @media screen and (min-width: 35em) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    height: auto;
  }
`;
export function Index() {
  const [state, send] = useMachine(gameMachine);
  const { fromStack, stacks, hasWon, countMoves } = state.context;
  return (
    <StyledPage>
      <h1>Tower of Hanoi</h1>
      <GameDashboard>
        {hasWon ? (
          <div>
            You Win!
            <button
              onClick={() => {
                send({ type: 'RESET' });
              }}
            >
              Reset
            </button>
          </div>
        ) : (
          <p>
            Object of the game is to move all the disks over to Tower 3. But you
            cannot place a larger disk onto a smaller disk.
          </p>
        )}
        <div>Current State: {state.value}</div>
        <div>Moves: {countMoves}</div>
      </GameDashboard>
      <PlayArea>
        {stacks.map((stack, i) => {
          return (
            <Rod
              key={i}
              number={i + 1}
              isActive={fromStack === stack}
              onClick={() => {
                if (state.value === 'idle') {
                  send({
                    type: 'SELECT_SOURCE_ROD',
                    fromIndex: i,
                  });
                } else if (state.value === 'chooseTarget') {
                  send({
                    type: 'SELECT_TARGET_ROD',
                    toIndex: i,
                  });
                }
              }}
            >
              {stack.map((diskValue) => {
                return <Disk key={diskValue} value={diskValue} />;
              })}
            </Rod>
          );
        })}
      </PlayArea>
    </StyledPage>
  );
}

export default Index;
