export const getItemIndexById = (array: any[], id: number = array.length):number => array.findIndex((item) => item.id === id);

export const getNewArrayWithoutItemByIndex = <T>(array: T[], index: number = array.length): T[] => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

export const getNewArrayWithReplacedItem = <T>(array: T[], item: T, index: number): T[] => index < array.length ? [
  ...array.slice(0, index),
  item,
  ...array.slice(index + 1),
] : array;

export const getNewId = <T extends { id: number }>(array: T[]): number => {
  return Math.max(...array.map(item => item.id), 0) + 1;
}