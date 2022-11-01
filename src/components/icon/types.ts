import { ThemeType } from '_style/theme';

export interface IconProps {
  glyph: string;
  size?: number;
  color?: keyof ThemeType['color'];
}

export interface SvgProps {
  size: number;
  color: keyof ThemeType['color'];
}
