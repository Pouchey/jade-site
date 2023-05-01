import { StyledLabel } from './style';
import { LabelProps } from './types';

export default ({ content }: LabelProps) => {
  return <StyledLabel>{content}</StyledLabel>;
};
