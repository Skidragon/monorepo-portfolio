import styled from 'styled-components';
import { Token } from '@sd/memory/ui';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';
import { assign } from 'xstate/lib/actions';
import { createModel } from 'xstate/lib/model';
import { spawnTokenPairs, shuffle } from '@sd/memory/helpers';
import { TokenState } from '@sd/memory/types';
/* eslint-disable-next-line */
export interface GameProps {}
type Token = {
  id: number;
  value: number;
  state: TokenState;
};

const gameModel = createModel(
  {
    tokens: [] as Token[],
    pairsCount: 0,
  },
  {
    events: {
      spawnTokens: () => {
        return {};
      },
      choosePlayer: () => {
        console.log('player 1');
        return {};
      },
    },
  }
);
const playerModel = createModel(
  {
    username: '',
    tokenPairsFound: [] as [Token, Token][],
  },
  {
    events: {
      selectToken: () => {
        return {};
      },
    },
  }
);
const gameMachine = gameModel.createMachine({
  initial: 'initiate',
  context: gameModel.initialContext,
  states: {
    initiate: {
      on: {
        '*': {
          target: 'choosePlayer',
          actions: gameModel.events.spawnTokens,
        },
      },
    },
    choosePlayer: {},
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
  const [state, send] = useMachine(() => gameMachine);
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
            <Token key={token.id} state={token.state}>
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
