import { Token } from '@sd/memory/types';
export const spawnTokenPairs = (pairsAmount: number) => {
  const tokens: Token[] = [];
  for (let i = 1; i <= pairsAmount * 2; i += 2) {
    const token: Token = {
      id: i,
      value: Math.ceil(i / 2),
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
