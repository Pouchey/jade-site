import React from 'react';

import {
  MenuActionType,
  MenuState,
  DefaultMenuState,
} from '_modules/ui/types/context';

const initialArgs = DefaultMenuState;

const menuReducer = (state: MenuState, { type }: MenuActionType) => {
  switch (type) {
    case 'openMenu':
      return { ...state, isMenuOpened: true };
    case 'closeMenu':
      return { ...state, isMenuOpened: false };
  }
};

export default () => React.useReducer(menuReducer, initialArgs);
