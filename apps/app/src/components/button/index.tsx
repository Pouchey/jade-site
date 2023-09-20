import { StyledButton } from './style';

interface Props {
  label: string;
  onClick?: () => void;
}

const Button = (props: Props) => (
  <StyledButton {...props}>{props.label}</StyledButton>
);

export default Button;
