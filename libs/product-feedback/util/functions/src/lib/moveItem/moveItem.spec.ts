import { moveItem } from './moveItem';

describe('productFeedbackUtilFunctions', () => {
  it('should return an empty array if array is empty', () => {
    expect(moveItem([], 0, 1)).toEqual([]);
  });
  it('an array with a single element should return the array with that single element only', () => {
    expect(moveItem([5], 0, 2)).toEqual([5]);
  });
  it('should swap elements with an array containing 2 elements', () => {
    expect(moveItem([6, 5], 0, 1)).toEqual([5, 6]);
    expect(moveItem([5, 6], 1, 0)).toEqual([6, 5]);
  });
  it('should put element at the beginning', () => {
    expect(moveItem([1, 2, 3, 4], 3, 0)).toEqual([4, 1, 2, 3]);
  });
  it('should put element at the end', () => {
    const array = [1, 2, 3, 4];
    expect(moveItem(array, 0, array.length - 1)).toEqual([2, 3, 4, 1]);
  });
  it('should work with big data', () => {
    expect(moveItem([1, 2, 3, 4, 5, 6, 7], 0, 2)).toEqual([
      2, 3, 1, 4, 5, 6, 7,
    ]);
  });
});
