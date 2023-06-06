import { memo } from 'react';

import { StyledSvgWrapper } from './style';
import { IconProps } from './types';

const svgs = import.meta.glob('./svg/*.svg', { eager: true });

const cache = new Map<string, React.FC>();

for (const path in svgs) {
  const name = path.match(/\.\/svg\/(.*)\.svg$/)?.[1];
  if (name) {
    const Icon = svgs[path] as { ReactComponent: React.FC };

    cache.set(name, Icon.ReactComponent);
  }
}

const Icon = memo(({ glyph, size = 32, color = 'black' }: IconProps) => {
  const Icon = cache.get(glyph);

  if (!glyph || !Icon) return null;

  return (
    <StyledSvgWrapper size={size} color={color}>
      <Icon />
    </StyledSvgWrapper>
  );
});

export default Icon;
