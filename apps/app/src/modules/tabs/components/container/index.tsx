import React from 'react';

import { TabsProvider } from '_modules/tabs/hooks/useContext';

import { StyledTabs } from './style';

interface Props {
  children: React.ReactNode;
  defaultTab: string;
}

const TabsContainer = ({ children, defaultTab }: Props) => {
  return (
    <TabsProvider defaultTab={defaultTab}>
      <StyledTabs>{children}</StyledTabs>
    </TabsProvider>
  );
};

export default TabsContainer;
