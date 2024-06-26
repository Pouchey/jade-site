import React from 'react';

import { useSongContext } from '_modules/song/hooks/useContext';

import { ESongListType } from '_shared/song/types';

import { StyledActive, StyledBar, StyledFooter } from './style';

interface Props {
  children: React.ReactNode;
  tabs: ESongListType[];
}

const TabsFooter = ({ children, tabs }: Props) => {
  const { state } = useSongContext();
  const total = tabs.length;
  const activeIndex = tabs.findIndex((tab) => tab === state.type);

  return (
    <StyledFooter>
      <div>{children}</div>
      <StyledBar>
        <StyledActive $activeIndex={activeIndex} $total={total} />
      </StyledBar>
    </StyledFooter>
  );
};

export default TabsFooter;
