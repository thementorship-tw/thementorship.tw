export const splitArray = <T>(
  array: T[]
): { firstRow: T[]; secondRow: T[] } => {
  const mid = Math.ceil(array.length / 2);
  const firstRow = array.slice(0, mid);
  const secondRow = array.slice(mid);

  return { firstRow, secondRow };
};

export const expandArray = <T>(array: T[]): T[] => {
  const result: T[] = [];
  while (result.length < 10) {
    result.push(...array);
  }
  return result;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
