import { StyledLabel } from './style';
import { LabelProps } from './types';

const Label = ({ content }: LabelProps) => {
  return <StyledLabel>{content}</StyledLabel>;
};

export default Label;
