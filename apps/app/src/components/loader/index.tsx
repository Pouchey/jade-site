import {
  StyledBar,
  StyledLoader,
  StyledLoaderLabel,
  StyledLoaderWrapper,
} from './style';
import { LoaderProps } from './types';

const bars = [1, 0.9, 0.8, 0.7, 0.6];

export default ({ label, color = 'green2', size = 48 }: LoaderProps) => {
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
