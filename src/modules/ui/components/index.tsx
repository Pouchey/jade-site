import { MenuProvider } from '../hooks/useContext';

import Menu from './menu';
import { StyledContent, StyledMain } from './style';
import Topbar from './topbar';

export default ({ children }: { children: React.ReactNode }) => (
  <StyledMain>
    <MenuProvider>
      <Topbar />
      <StyledContent>{children}</StyledContent>
      <Menu />
    </MenuProvider>
  </StyledMain>
);
