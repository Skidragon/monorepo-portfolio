import styled, { css } from 'styled-components';
import { Token } from '@sd/memory/ui';
import { useMachine } from '@xstate/react';
import { createMachine, sendParent, spawn, send } from 'xstate';
import { assign } from 'xstate/lib/actions';
import { createModel } from 'xstate/lib/model';
import { spawnTokenPairs, shuffle } from '@sd/memory/helpers';
import { TokenState } from '@sd/memory/types';
import { useEffect } from 'react';
/* eslint-disable-next-line */
export interface GameProps {}
type Token = {
  id: number;
  value: number;
  state: TokenState;
};

const playerMachine = createMachine({
  initial: 'offline',
  context: {
    tokensMatched: [],
    token: null,
    matchingToken: null
  },
  states: {
    offline: {
      entry: [() => {
        console.log('offline');
      }, assign({
        token: null,
        matchingToken: null
      })],
      on: {
        WAKE: {
          target: 'online',
          actions: sendParent((ctx) => {
            return {
              playerTokens: ctx.tokensMatched,
              type: 'HIGHLIGHT_PLAYER_MATCHES'
            }
          })
        },
      },
    },
    online: {
      entry: () => {
        console.log('online');
      },
      on: {
        SELECT_TOKEN: {
          cond: (_, event) => isValidTokenSelection(event.token);
          actions: [assign({
            token: (ctx) => assignToken
          })]
        },
        SELECT_MATCHING_TOKEN: {
          target: 'offline',
          cond: (_ event) => isValidTokenSelection(event.token);
          actions: [assign({
            matchingToken: (ctx) => assignToken
          }), sendParent((context) => ({
            ...context,
            type: 'PLAYER_TURN_ENDED'
          }))]
        },
      },
    },
  },
});

const gameMachine = createMachine({
  id: 'game',
  initial: 'initializing',
  context: {
    tokens: [],
    players: [],
    playerIndex: 0,
    player: null,
  },
  states: {
    initializing: {
      on: {
        INITIALIZE: {
          actions: [
            assign({
              tokens: spawnTokenPairs(4),
              players: () => {
                return new Array(4).fill(0).map((_, index) => {
                  return spawn(playerMachine, {
                    name: `player-${index + 1}`,
                    sync: true,
                  });
                });
              },
            }),
          ],
          target: 'choosingPlayer',
        },
      },
    },
    choosingPlayer: {
      always: {
        target: 'playerMovePhase',
        actions: [
          assign({
            player: (ctx) => ctx.players[ctx.playerIndex % ctx.players.length],
          }),
          send({ type: 'WAKE' }, { to: (ctx) => ctx.player.id }),
        ],
      },
    },
    playerMovePhase: {
      on: {
        HIGHLIGHT_PLAYER_MATCHES: {

          actions: assign({

          })
        },
        PLAYER_TURN_ENDED: {
          target: 'choosingPlayer',
          actions: assign({
            playerIndex: (ctx) => (ctx.playerIndex + 1) % ctx.players.length,
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
const PlayerBox = styled.div<{ isTurn: boolean }>`
  display: inline-flex;
  justify-content: center;
  background: var(--blue-100);
  padding: 2em;
  border-radius: 1rem;
  ${(props) => {
    if (props.isTurn) {
      return css`
        background: var(--orange, orange);
      `;
    }
    return css`
      background: var(--blue-100);
    `;
  }}
`;

export function Game(props: GameProps) {
  const GRID_SIZE = 4;
  const [state, send] = useMachine(() => gameMachine);
  const { players, player } = state.context;
  useEffect(() => {
    send({
      type: 'INITIALIZE',
    });
  }, [send]);
  return (
    <StyledGame>
      <Header>
        <h1>memory</h1>
      </Header>
      <Table size={GRID_SIZE}>
        {state.context.tokens.map((token, i) => {
          return (
            <Token
              key={token.id}
              state={token.state}
              onClick={() => {
                if(!player.context.token) {
                  player.send({
                    type: 'SELECT_TOKEN',
                    token
                  });
                } else {
                  player.send({
                    type: 'SELECT_MATCHING_TOKEN',
                    token
                  })
                }
              }}
            >
              {token.value}
            </Token>
          );
        })}
      </Table>
      <Footer>
        {players.map((currentPlayer) => {
          return (
            <PlayerBox key={currentPlayer.id} isTurn={player === currentPlayer}>
              {currentPlayer.id}
            </PlayerBox>
          );
        })}
      </Footer>
    </StyledGame>
  );
}

export default Game;
