import { memo } from 'react';

import { StyledSvgWrapper } from './style';
import { IconProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const svgs: Record<string, any> = import.meta.glob('./svg/*.svg', {
  eager: true,
});

//  Cache the svgs in memory
const cache: Map<string, React.FC<React.SVGProps<SVGSVGElement>>> = new Map();

for (const [key, value] of Object.entries(svgs)) {
  const name = key.replace('./svg/', '').replace('.svg', '');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  cache.set(name, value.ReactComponent);
}

export default memo(({ glyph, size = 32, color = 'black' }: IconProps) => {
  const Icon = cache.get(glyph);

  if (!glyph || !Icon) return null;

  return (
    <StyledSvgWrapper size={size} color={color}>
      <Icon />
    </StyledSvgWrapper>
  );
});
