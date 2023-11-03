import Loader from '_components/loader';

import { ThemeType } from '_style/theme';

import { StyledButton } from './style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: keyof ThemeType['size'];
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button = ({ label, disabled, isLoading, ...props }: Props) => (
  <StyledButton $disabled={disabled || isLoading} {...props}>
    {label}
    {isLoading && <Loader size={16} />}
  </StyledButton>
);

export default Button;
