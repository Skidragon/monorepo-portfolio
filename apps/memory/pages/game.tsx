import styled from 'styled-components';
import { Token, TokenState } from '@sd/memory/ui';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import { assign } from 'xstate/lib/actions';

/* eslint-disable-next-line */
export interface GameProps {}
type SelectTokenEvent = {
  type: 'SELECT_TOKEN';
  index: number;
};

type Event = SelectTokenEvent;
type Token = {
  id: number;
  value: number;
  state: TokenState;
};
type Context = {
  tokens: Token[];
  tokenToMatch: Token | Record<string, string>;
};
const generateTokens = (gridSize: number) => {
  const tokens: Token[] = [];
  for (let i = 0; i < gridSize * 2; i++) {
    const token: Token = {
      id: i,
      value: i + 1,
      state: 'HIDDEN',
    };
    const matchingToken = {
      ...token,
      id: i + 1,
    };
    tokens.push(...[token, matchingToken]);
  }

  return tokens;
};
const initialContext: Context = {
  tokens: [],
  tokenToMatch: {},
};
const gameMachine = createMachine<Context, Event>({
  initial: 'idle',
  context: initialContext,
  states: {
    idle: {
      on: {
        SELECT_TOKEN: {
          actions: assign<Context, SelectTokenEvent>({
            tokens: (ctx, { index }) => {
              const token = { ...ctx.tokens[index] };
              const updatedTokens = [...ctx.tokens];
              token.state = 'SELECTED';
              updatedTokens[index] = token;
              return updatedTokens;
            },
          }),
        },
      },
    },
  },
});
const StyledGame = styled.div``;
const Header = styled.header``;
const Table = styled.main<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, auto);
  grid-template-rows: repeat(${(props) => props.size}, auto);
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  & > * + * {
    margin-left: 1rem;
  }
`;
const GameInfo = styled.div`
  display: inline-flex;
  justify-content: center;
  background: var(--blue-100);
  padding: 2em;
  border-radius: 1rem;
`;

export function Game(props: GameProps) {
  const GRID_SIZE = 4;
  const [state, send] = useMachine(() =>
    gameMachine.withContext({
      tokens: generateTokens(GRID_SIZE),
      tokenToMatch: {},
    })
  );
  const { tokens } = state.context;

  return (
    <StyledGame>
      <Header>
        <h1>memory</h1>
        <div></div>
      </Header>
      <Table size={GRID_SIZE}>
        {tokens.map((token, i) => {
          return (
            <Token
              key={token.id}
              state={token.state}
              onClick={() => {
                send({
                  type: 'SELECT_TOKEN',
                  index: i,
                });
              }}
            >
              {token.value}
            </Token>
          );
        })}
      </Table>
      <Footer>
        <GameInfo>0:01</GameInfo>
        <GameInfo>39</GameInfo>
      </Footer>
    </StyledGame>
  );
}

export default Game;
