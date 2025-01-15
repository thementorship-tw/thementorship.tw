export const splitArray = <T>(
  array: T[]
): { firstRow: T[]; secondRow: T[] } => {
  const mid = Math.ceil(array.length / 2);
  const firstRow = array.slice(1, mid);
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
