import React from 'react';

import Counter from '_components/counter';
import Label from '_components/label';

import { TSong } from '_shared/song/types';

import { StyledRequested } from './style';

interface Props {
  requester: TSong['requester'];
  count?: TSong['count'];
  isLiked?: boolean;
}

const Requested = React.memo(({ requester, count, isLiked }: Props) => {
  const label = requester?.name
    ? `Requested by ${requester.name}`
    : 'Requested';

  return (
    <StyledRequested>
      {count && <Counter count={count} isLiked={isLiked} size={20} readonly />}
      <Label content={label} />
    </StyledRequested>
  );
});

export default Requested;
