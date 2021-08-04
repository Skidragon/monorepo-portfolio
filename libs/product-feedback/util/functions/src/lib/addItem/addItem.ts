export function addItem<T>(array: T[], item: T, insertIndex: number): T[] {
  if (array.length === 0) {
    return [item];
  }
  if (insertIndex === 0) {
    return [item, ...array];
  }
  if (insertIndex === array.length) {
    return [...array, item];
  }
  return [...array.slice(0, insertIndex), item, ...array.slice(insertIndex)];
}
