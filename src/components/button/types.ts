import React from 'react';
import { ThemeType } from '_style/theme';

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  label: string;
  size?: keyof ThemeType['size'];
  disabled?: boolean;
  onClick?: () => void;
}
