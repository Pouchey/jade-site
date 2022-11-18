import {
  StyledBar,
  StyledLoader,
  StyledLoaderLabel,
  StyledLoaderWrapper,
} from './style';
import { LoaderProps } from './types';

export default ({ label, color = 'green2', size = 32 }: LoaderProps) => {
  return (
    <StyledLoaderWrapper>
      <StyledLoader color={color} size={size}>
        <StyledBar color={color} size={size} />
        <StyledBar color={color} size={size} />
        <StyledBar color={color} size={size} />
        <StyledBar color={color} size={size} />
        <StyledBar color={color} size={size} />
      </StyledLoader>
      <StyledLoaderLabel>{label}</StyledLoaderLabel>
    </StyledLoaderWrapper>
  );
};
