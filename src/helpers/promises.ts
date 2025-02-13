export const sleep = (ms?: number) =>
  new Promise((r) => setTimeout(r, ms || Math.random() * 10000));
