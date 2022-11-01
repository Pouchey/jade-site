export const randInt: (min: number, max: number) => number = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randFloat: (min: number, max: number) => number = (min, max) => {
  return Math.random() * (max - min) + min;
};
