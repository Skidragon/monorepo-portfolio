import { spawnTokenPairs } from './spawnTokenPairs';
import { getTokenPairs } from '../getTokenPairs/getTokenPairs';
describe('spawnTokenPairs', () => {
  it('should spawn the correct amount of tokens', () => {
    const tokens = spawnTokenPairs(4);
    expect(tokens.length).toBe(16);
  });
  it('all tokens should have a match', () => {
    const tokens = spawnTokenPairs(4);
    const pairs = getTokenPairs(tokens);
    expect(pairs.length).toBe(8);
  });
});
