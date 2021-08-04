import { addItem } from './addItem';

describe('addItem', () => {
  it('should have an array with a single element', () => {
    expect(addItem([], 1, 0)).toEqual([1]);
  });
  it('should add an element at the specified index in the array', () => {
    expect(addItem([1, 2, 4], 3, 2)).toEqual([1, 2, 3, 4]);
  });
  it('should add an element at the start of the array', () => {
    const array = [2, 3, 4];
    expect(addItem(array, 1, 0)).toEqual([1, 2, 3, 4]);
  });
  it('should add an element at the end of the array', () => {
    const array = [1, 2, 3];
    expect(addItem(array, 4, array.length)).toEqual([1, 2, 3, 4]);
  });
});
