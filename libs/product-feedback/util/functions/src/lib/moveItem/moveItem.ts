export function moveItem<T>(
  array: T[],
  fromIndex: number,
  toIndex: number
): T[] {
  if (array.length === 0) {
    return [];
  }
  if (fromIndex === toIndex) {
    return array;
  }
  const itemToMove = array[fromIndex];
  const itemlessArray = array.filter((_, index) => {
    return fromIndex !== index;
  });
  if (toIndex === 0) {
    return [itemToMove, ...itemlessArray];
  }
  if (toIndex === array.length) {
    return [...itemlessArray, itemToMove];
  }
  return [
    ...itemlessArray.slice(0, toIndex),
    itemToMove,
    ...itemlessArray.slice(toIndex),
  ];
}
