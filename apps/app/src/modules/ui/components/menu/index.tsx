import React from 'react';
import { createPortal } from 'react-dom';

import Menu from '_modules/ui/components/menu';

const MenuPortal = React.memo(() => {
  const container = document.getElementById('menu') as HTMLElement;
  return createPortal(<Menu />, container);
});

export default MenuPortal;
