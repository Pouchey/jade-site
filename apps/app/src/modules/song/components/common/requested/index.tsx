import React from 'react';

import Counter from '_components/counter';

import { TSong } from '_shared/song/types';

import { StyledRequested } from './style';

interface Props {
  requester: TSong['requester'];
  count?: TSong['count'];
  isLiked?: boolean;
}

const Requested = React.memo(({ requester, count, isLiked }: Props) => {
  return (
    <StyledRequested>
      {count && <Counter count={count} isLiked={isLiked} size={20} readonly />}
      <span>
        Requested
        {requester?.name && ` by ${requester?.name}`}
      </span>
    </StyledRequested>
  );
});

export default Requested;
