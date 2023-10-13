import { memo } from 'react';

import { ThemeType } from '_style/theme';

import { StyledSvgWrapper } from './style';

const svgs = import.meta.glob('./svg/*.svg', {
  eager: true,
  as: 'react',
});

const cache = new Map<string, React.FC>();

for (const path in svgs) {
  const name = path.match(/\.\/svg\/(.*)\.svg$/)?.[1];
  if (name) {
    const Icon = svgs[path] as { default: React.FC };

    cache.set(name, Icon.default);
  }
}

interface Props {
  glyph: string;
  size?: number;
  color?: keyof ThemeType['color'];
}

const Icon = memo(({ glyph, size = 32, color = 'black' }: Props) => {
  const IconFC = cache.get(glyph);

  if (!glyph || !IconFC) return null;

  return (
    <StyledSvgWrapper $size={size} $color={color}>
      <IconFC />
    </StyledSvgWrapper>
  );
});

export default Icon;
