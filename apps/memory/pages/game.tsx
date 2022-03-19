import styled, { css } from 'styled-components';
import { Token, Button } from '@sd/memory/ui';
import { useMachine } from '@xstate/react';
import { sendParent, spawn, ActorRefFrom, send } from 'xstate';
import { assign } from 'xstate/lib/actions';
import { createModel } from 'xstate/lib/model';
import { spawnTokenPairs, shuffle } from '@sd/memory/helpers';
import { TokenState } from '@sd/memory/types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable-next-line */
export interface GameProps {}
type Token = {
  id: number;
  value: number;
  state: TokenState;
};
type PlayerTokensMatched = Record<string, Token>;
const playerModel = createModel(
  {
    username: '',
    tokensMatched: {} as PlayerTokensMatched,
    token: null as Token | null,
    matchingToken: null as Token | null,
    score: 0,
  },
  {
    events: {
      WAKE: () => ({}),
      SELECT_TOKEN: (token: Token) => ({ token }),
      SELECT_MATCHING_TOKEN: (token: Token) => ({ token }),
      UPDATE_SCORE: (number: number) => ({ number }),
      UPDATE_TOKENS_MATCHED: (tokensMatched: PlayerTokensMatched) => ({
        tokensMatched,
      }),
      END_TURN: () => ({}),
    },
  }
);

const playerMachine = playerModel.createMachine({
  initial: 'offline',
  context: playerModel.initialContext,
  states: {
    offline: {
      on: {
        WAKE: {
          target: 'online',
          actions: sendParent('HIGHLIGHT_PLAYER_MATCHES'),
        },
      },
    },
    online: {
      entry: () => {
        console.log('online');
      },
      on: {
        SELECT_TOKEN: {
          cond: (_, event) => event.token.state == 'HIDE_VALUE',
          actions: [
            assign({
              token: (_, event) => {
                return event.token;
              },
            }),
            sendParent((context) => ({
              token: context.token,
              type: 'PLAYER_SELECT_TOKEN',
            })),
          ],
        },
        SELECT_MATCHING_TOKEN: {
          cond: (_, event) => event.token.state === 'HIDE_VALUE',
          actions: [
            assign({
              matchingToken: (_, event) => {
                return event.token;
              },
            }),
            sendParent((context) => ({
              token: context.token,
              matchingToken: context.matchingToken,
              type: 'PLAYER_SELECT_MATCHING_TOKEN',
            })),
          ],
          target: 'endingTurn',
        },
      },
    },

    endingTurn: {
      on: {
        UPDATE_SCORE: {
          actions: assign({
            score: (ctx, event) => ctx.score + event.number,
          }),
        },
        UPDATE_TOKENS_MATCHED: {
          actions: assign({
            tokensMatched: (ctx) => {
              return {
                ...ctx.tokensMatched,
                [ctx.token.id]: ctx.token,
                [ctx.matchingToken.id]: ctx.matchingToken,
              };
            },
          }),
        },
        END_TURN: {
          target: 'offline',
          actions: [
            playerModel.assign({
              token: null,
              matchingToken: null,
            }),
          ],
        },
      },
    },
  },
});
const gameModel = createModel(
  {
    tokens: [] as Token[],
    players: [] as ActorRefFrom<typeof playerMachine>[],
    playerIndex: 0,
    player: null as null | ActorRefFrom<typeof playerMachine>,
  },
  {
    events: {
      INITIALIZE: () => ({}),
      HIGHLIGHT_PLAYER_MATCHES: () => ({}),
      PLAYER_SELECT_TOKEN: (token: Token) => ({ token }),
      PLAYER_SELECT_MATCHING_TOKEN: (token: Token, matchingToken: Token) => ({
        token,
        matchingToken,
      }),
    },
  }
);
const gameMachine = gameModel.createMachine({
  id: 'game',
  initial: 'initializing',
  context: gameModel.initialContext,
  states: {
    initializing: {
      on: {
        INITIALIZE: {
          actions: [
            assign({
              tokens: shuffle(spawnTokenPairs(8, 'icons')),
              playerIndex: 0,
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
        actions: [
          assign({
            player: (ctx) => ctx.players[ctx.playerIndex % ctx.players.length],
          }),
          send({ type: 'WAKE' }, { to: (ctx) => ctx.player.id }),
        ],
        target: 'playerMovePhase',
      },
    },
    playerMovePhase: {
      on: {
        HIGHLIGHT_PLAYER_MATCHES: {
          actions: assign({
            tokens: (ctx) => {
              const otherPlayers = ctx.players.filter(
                (player) => player !== ctx.player
              );
              return ctx.tokens.map((token) => {
                if (ctx.player.getSnapshot().context.tokensMatched[token.id]) {
                  return {
                    ...token,
                    state: 'MATCH',
                  };
                } else if (
                  otherPlayers.some((player) => {
                    return player.getSnapshot().context.tokensMatched[token.id];
                  })
                ) {
                  return {
                    ...token,
                    state: 'HIGHLIGHT',
                  };
                }
                return token;
              });
            },
          }),
        },
        PLAYER_SELECT_TOKEN: {
          actions: assign({
            tokens: (ctx, event) => {
              return ctx.tokens.map((token) => {
                if (token === event.token) {
                  return {
                    ...token,
                    state: 'HIGHLIGHT',
                  };
                }
                return token;
              });
            },
          }),
        },
        PLAYER_SELECT_MATCHING_TOKEN: [
          {
            cond: (_, event) => event.token.value === event.matchingToken.value,
            actions: [
              assign({
                tokens: (ctx, event) => {
                  return ctx.tokens.map((token) => {
                    if (token.value === event.token.value) {
                      return {
                        ...token,
                        state: 'MATCH',
                      };
                    }
                    return token;
                  });
                },
              }),
              send(
                { type: 'UPDATE_SCORE', number: 1 },
                { to: (ctx) => ctx.player.id }
              ),
              send(
                { type: 'UPDATE_TOKENS_MATCHED' },
                { to: (ctx) => ctx.player.id }
              ),
            ],
            target: 'match',
          },
          {
            actions: [
              assign({
                tokens: (ctx, event) => {
                  return ctx.tokens.map((token) => {
                    if (
                      token.id === event.token.id ||
                      token.id === event.matchingToken.id
                    ) {
                      return {
                        ...token,
                        state: 'HIGHLIGHT',
                      };
                    }
                    return token;
                  });
                },
              }),
            ],
            target: 'mismatch',
          },
        ],
      },
    },
    match: {
      after: {
        1200: {
          target: 'endingTurn',
        },
      },
    },
    mismatch: {
      after: {
        800: {
          target: 'endingTurn',
          actions: assign({
            tokens: (ctx) => {
              return ctx.tokens.map((token) => {
                if (
                  ctx.players.some((player) => {
                    return player.getSnapshot().context.tokensMatched[token.id];
                  })
                ) {
                  return {
                    ...token,
                    state: 'HIGHLIGHT',
                  };
                }
                return {
                  ...token,
                  state: 'HIDE_VALUE',
                };
              });
            },
          }),
        },
      },
    },
    endingTurn: {
      always: [
        {
          cond: (ctx) =>
            ctx.tokens.every((token) => token.state !== 'HIDE_VALUE'),
          target: 'win',
        },
        {
          actions: [
            send({ type: 'END_TURN' }, { to: (ctx) => ctx.player.id }),
            assign({
              tokens: (ctx) => {
                return ctx.tokens.map((token) => {
                  if (token.state === 'HIDE_VALUE') {
                    return token;
                  }
                  return {
                    ...token,
                    state: 'HIGHLIGHT',
                  };
                });
              },
              playerIndex: (ctx) => (ctx.playerIndex + 1) % ctx.players.length,
            }),
          ],
          target: 'choosingPlayer',
        },
      ],
    },
    win: {
      type: 'final',
    },
  },
});

const StyledGame = styled.div`
  display: flex;
  flex-flow: column;
  padding: 1rem;
  margin: 0 auto;
  max-width: 50rem;
`;
const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  & > * + * {
    margin-left: 1rem;
  }
  margin-bottom: 2rem;
`;
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
  flex-flow: column;
  color: white;
  justify-content: center;
  align-items: center;
  background: var(--blue-100);
  padding: 2em 1em;
  width: 100%;
  max-width: 5rem;
  border-radius: 1rem;
  ${(props) => {
    if (props.isTurn) {
      return css`
        background: var(--orange, orange);
        position: relative;
        &::after {
          content: '';
          width: 1rem;
          height: 1rem;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -100%);
          border: 0.5rem solid transparent;
          border-bottom: 0.6rem solid orange;
        }
      `;
    }
    return css`
      background: var(--blue-100);
    `;
  }}
`;
const GameOptions = styled.div`
  display: flex;
  & > * + * {
    margin-left: 1rem;
  }
`;
export function Game(props: GameProps) {
  const GRID_SIZE = 4;
  const [state, send] = useMachine(() => gameMachine);
  const { players, player } = state.context;
  const router = useRouter();
  const { type } = router.query;
  useEffect(() => {
    send({
      type: 'INITIALIZE',
    });
  }, [send]);
  return (
    <StyledGame>
      <Header>
        <h1>memory</h1>
        <GameOptions>
          <Button variant="primary">Restart</Button>
          <Button
            onClick={() => {
              router.push('/');
            }}
          >
            New Game
          </Button>
        </GameOptions>
      </Header>
      <Table size={GRID_SIZE}>
        {state.context.tokens.map((token, i) => {
          return (
            <Token
              key={token.id}
              state={token.state}
              onClick={() => {
                if (!player?.getSnapshot()?.context?.token) {
                  player.send({
                    type: 'SELECT_TOKEN',
                    token,
                  });
                } else {
                  player.send({
                    type: 'SELECT_MATCHING_TOKEN',
                    token,
                  });
                }
              }}
            >
              {typeof token.value === 'number' ? (
                token.value
              ) : (
                <FontAwesomeIcon icon={token.value} />
              )}
            </Token>
          );
        })}
      </Table>
      <Footer>
        {players.map((currentPlayer, index) => {
          return (
            <PlayerBox
              key={currentPlayer.id}
              isTurn={player.id === currentPlayer.id}
            >
              <div>{`P${index}`}</div>
              <div>{currentPlayer.getSnapshot().context.score}</div>
            </PlayerBox>
          );
        })}
      </Footer>
    </StyledGame>
  );
}

export default Game;
