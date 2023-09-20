import { ThemeType } from '_style/theme';

import {
  StyledBar,
  StyledLoader,
  StyledLoaderLabel,
  StyledLoaderWrapper,
} from './style';

const bars = [1, 0.9, 0.8, 0.7, 0.6];

interface Props {
  label: string;
  color?: keyof ThemeType['color'];
  size?: number;
}

const Label = ({ label, color = 'green2', size = 48 }: Props) => {
  return (
    <StyledLoaderWrapper>
      <StyledLoader color={color} size={size}>
        {bars.map((bar) => (
          <StyledBar key={bar} color={color} size={size} delay={bar} />
        ))}
      </StyledLoader>
      <StyledLoaderLabel>{label}</StyledLoaderLabel>
    </StyledLoaderWrapper>
  );
};

export default Label;
