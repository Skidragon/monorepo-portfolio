import { Token } from '@sd/memory/types';
export const spawnTokenPairs = (gridSize: number) => {
  const tokens: Token[] = [];
  for (let i = 0; i < gridSize * gridSize; i += 2) {
    const token: Token = {
      id: i,
      value: i + 1,
      state: 'HIDE_VALUE',
    };
    const matchingToken = {
      ...token,
      id: i + 1,
    };
    tokens.push(...[token, matchingToken]);
  }

  return tokens;
};
