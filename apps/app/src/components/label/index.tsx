import { StyledLabel } from './style';

interface Props {
  content: string;
}

const Label = ({ content }: Props) => {
  return <StyledLabel>{content}</StyledLabel>;
};

export default Label;
