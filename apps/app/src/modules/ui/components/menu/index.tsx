import React from 'react';
import { createPortal } from 'react-dom';

import MenuContent from './Menu';

const Menu = React.memo(() => {
  const container = document.getElementById('menu') as HTMLElement;
  return createPortal(<MenuContent />, container);
});

export default Menu;
