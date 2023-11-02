export interface MenuState {
  isMenuOpened: boolean;
}
export const DefaultMenuState = {
  isMenuOpened: false,
};

export type MenuActionType = {
  type: 'openMenu' | 'closeMenu';
};

export interface MenuContextInterface {
  state: MenuState;
  dispatch: React.Dispatch<MenuActionType>;
}
export const DefaultMenuContext = {
  state: DefaultMenuState,
  dispatch: () => undefined,
};
