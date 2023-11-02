import React from 'react';

import {
  MenuContextInterface,
  DefaultMenuContext,
} from '_modules/ui/types/context';

import useMenuReducer from './useReducer';

const MenuContext =
  React.createContext<MenuContextInterface>(DefaultMenuContext);
MenuContext.displayName = 'Menu';

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuContext = () => React.useContext(MenuContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const MenuProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useMenuReducer();
  const value = { state, dispatch };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
