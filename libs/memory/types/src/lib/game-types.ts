import { IconProp } from '@fortawesome/fontawesome-svg-core';
export type TokenState = 'HIDE_VALUE' | 'HIGHLIGHT' | 'MATCH';
export type Token = {
  id: number;
  value: number | IconProp;
  state: TokenState;
};
export type Theme = 'numbers' | 'icons';
export type AmountOfPlayers = 1 | 2 | 3 | 4;
export type GridSize = 4 | 6;
export type PairsAmount = 8 | 18;
export type CreateGameFormValues = {
  theme: Theme;
  players: `${AmountOfPlayers}`;
  gridSize: `${GridSize}`;
};
