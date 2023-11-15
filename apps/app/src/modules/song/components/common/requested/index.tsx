import React from 'react';

import Icon from '_components/icon';

import { TSong } from '_shared/song/types';

import { StyledRequested, StyledCount } from './style';

interface Props {
  requester: TSong['requester'];
  count: TSong['count'];
}

const Requested = React.memo(({ requester, count }: Props) => {
  return (
    <StyledRequested>
      <Icon glyph="heart" size={18} color={'red1'} />
      <StyledCount>{count}</StyledCount>
      <span>
        Requested
        {requester?.name && ` by ${requester?.name}`}
      </span>
    </StyledRequested>
  );
});

export default Requested;
