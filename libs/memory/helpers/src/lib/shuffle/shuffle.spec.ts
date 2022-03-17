import { shuffle } from './shuffle';
describe('shuffle', () => {
  it('should not give back same array', () => {
    const array = [1, 2, 3, 4];
    const newArray = shuffle(array);
    expect(array === newArray).toBeFalsy();
  });
  it('should not edit the length of the array', () => {
    const array = [1, 2, 3, 4];
    const newArray = shuffle(array);
    expect(newArray.length).toEqual(4);
  });
});
