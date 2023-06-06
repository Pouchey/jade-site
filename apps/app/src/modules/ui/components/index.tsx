import { MenuProvider } from '../hooks/useContext';

import Menu from './menu';
import { StyledContent, StyledMain } from './style';
import Topbar from './topbar';

const UIWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledMain>
    <MenuProvider>
      <Topbar />
      <StyledContent>{children}</StyledContent>
      <Menu />
    </MenuProvider>
  </StyledMain>
);

export default UIWrapper;
