import { Token } from '@sd/memory/types';
export const getTokenPairs = (tokens: Token[]) => {
  const pairs: [Token, Token][] = [];
  for (let i = 0; i < tokens.length - 1; i += 2) {
    const token = tokens[i];
    const matchingToken = tokens[i + 1];
    pairs.push([token, matchingToken]);
  }
  return pairs;
};
