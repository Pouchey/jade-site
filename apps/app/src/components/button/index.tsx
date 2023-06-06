import { StyledButton } from './style';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => (
  <StyledButton {...props}>{props.label}</StyledButton>
);

export default Button;
