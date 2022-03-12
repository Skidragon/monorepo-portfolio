export type TokenState = 'HIDE_VALUE' | 'HIGHLIGHT' | 'MATCH';
export type Token = {
  id: number;
  value: number;
  state: TokenState;
};
