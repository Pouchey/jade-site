import { ThemeType } from '_style/theme';

import { StyledButton } from './style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: keyof ThemeType['size'];
  color?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button = (props: Props) => (
  <StyledButton {...props}>{props.label}</StyledButton>
);

export default Button;
