export interface TabsState {
  active: string | null;
}
export const DefaultTabsState = {
  active: null,
};

export type TabsActionType = {
  type: 'setTab';
  payload: string;
};

export interface TabsContextInterface {
  state: TabsState;
  dispatch: React.Dispatch<TabsActionType>;
}
export const DefaultTabsContext = {
  state: DefaultTabsState,
  dispatch: () => undefined,
};
