import React from 'react';

import {
  TabsActionType,
  TabsState,
  DefaultTabsState,
} from '_modules/tabs/types/context';

const initialArgs = DefaultTabsState;

const TabsReducer = (state: TabsState, { type, payload }: TabsActionType) => {
  switch (type) {
    case 'setTab':
      return { ...state, active: payload };
    default:
      return state;
  }
};

export default (defaultTab: string) =>
  React.useReducer(TabsReducer, {
    ...initialArgs,
    active: defaultTab,
  });
