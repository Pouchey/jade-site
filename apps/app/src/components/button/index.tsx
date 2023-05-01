import { StyledButton } from './style';
import { ButtonProps } from './types';

export default (props: ButtonProps) => (
  <StyledButton {...props}>{props.label}</StyledButton>
);
