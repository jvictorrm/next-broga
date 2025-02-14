export const getIntArray = (min: number, max: number) => {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};

export const getRandomIntArrayInRange = (
  min: number,
  max: number,
  count: number
) => {
  return Array(max)
    .fill(0)
    .map((_, idx) => min + idx + 1)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};
