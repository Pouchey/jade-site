import React from 'react';

import { useTabsContext } from '_modules/tabs/hooks/useContext';

import { StyledTab } from './style';

interface Props {
  children: React.ReactNode;
  value: string;
}

const Tab = ({ children, value }: Props) => {
  const { state } = useTabsContext();

  const isActive = state.active === value;

  if (!isActive) return null;

  return <StyledTab>{children}</StyledTab>;
};

export default Tab;
