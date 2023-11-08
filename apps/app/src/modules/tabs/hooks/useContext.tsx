import React from 'react';

import {
  TabsContextInterface,
  DefaultTabsContext,
} from '_modules/tabs/types/context';

import useTabsReducer from './useReducer';

const TabsContext =
  React.createContext<TabsContextInterface>(DefaultTabsContext);
TabsContext.displayName = 'Tabs';

// eslint-disable-next-line react-refresh/only-export-components
export const useTabsContext = () => React.useContext(TabsContext);

type ProviderProps = {
  children: React.ReactNode;
  defaultTab: string;
};

export const TabsProvider = ({ children, defaultTab }: ProviderProps) => {
  const [state, dispatch] = useTabsReducer(defaultTab);
  const value = { state, dispatch };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
