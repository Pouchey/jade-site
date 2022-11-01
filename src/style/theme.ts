export const color = {
  // Grays
  grey90: '#464648',
  grey75: '#53556B',
  grey60: '#84889C',
  grey50: '#D7DAE2',
  grey40: '#e6e7eb',
  grey30: '#EFF0F3',
  grey25: '#F9F9FB',
  grey20: '#FBFBFE',
  // White and black
  black: '#1E1E1E',
  white: '#FFF',
  // Brand colors
  green1: '#9ED2C6',
  green2: '#54BAB9',
  beige1: '#F7ECDE',
  red1: '#FF4A4A',
};

export const size = {
  tiny: '0.625rem', // 10px
  small: '0.75rem', // 12px
  normal: '0.875rem', // 14px
  tall: '1rem', // 16px
  big: '1.125rem', // 18px
  huge: '1.375rem', // 20px
  grizzly: '1.5rem', // 24px
  dumbo: '1.75rem', // 26px
  diplodocus: '2rem', // 32px
};

export const weight = {
  regular: 400,
  medium: 700,
};

export const metrics = {
  topbarHeight: '50px',
  menuWidth: '300px',
};

export type ThemeType = {
  color: typeof color;
  size: typeof size;
  weight: typeof weight;
  metrics: typeof metrics;
};

const theme: ThemeType = {
  color,
  size,
  weight,
  metrics,
};

export default theme;
