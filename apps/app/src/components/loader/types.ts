import { ThemeType } from '_style/theme';

export interface LoaderProps {
  label: string;
  color?: keyof ThemeType['color'];
  size?: number;
}

export interface LoaderType {
  color?: keyof ThemeType['color'];
  size?: number;
}
