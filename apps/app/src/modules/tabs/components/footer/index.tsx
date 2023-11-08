import React from 'react';

import { useTabsContext } from '_modules/tabs/hooks/useContext';

import { StyledActive, StyledBar, StyledFooter } from './style';

interface Props {
  children: React.ReactNode;
  tabs: string[];
}

const TabsFooter = ({ children, tabs }: Props) => {
  const { state } = useTabsContext();
  const total = tabs.length;
  const activeIndex = tabs.findIndex((tab) => tab === state.active);

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
