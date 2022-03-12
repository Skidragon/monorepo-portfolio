import { getTokenPairs } from './getTokenPairs';
import { spawnTokenPairs } from '../spawnTokenPairs/spawnTokenPairs';
describe('getTokenPairs', () => {
  it('token should be with its matching token', () => {
    const tokens = spawnTokenPairs(4);
    const pairs = getTokenPairs(tokens);
    expect(pairs[0][0].value === pairs[0][1].value).toBeTruthy();
    expect(pairs.every((pair) => pair[0].value === pair[1].value)).toBeTruthy();
  });
});
