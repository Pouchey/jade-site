import { createPortal } from 'react-dom';

import Icon from '_components/icon';
import Loader from '_components/loader';

import {
  StyledModalContainer,
  StyledModalContent,
  StyledModalInfo,
  StyledOverlay,
} from './style';

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
  info: string;
  onClose: () => void;
}

const Modal = ({ children, isLoading, info, onClose }: Props) =>
  createPortal(
    <StyledModalContainer className="modal">
      <StyledOverlay onClick={onClose} />
      {isLoading ? (
        <Loader size={32} />
      ) : (
        <StyledModalContent>
          <StyledModalInfo>
            <Icon glyph="info" />
            <span>{info}</span>
          </StyledModalInfo>
          {children}
        </StyledModalContent>
      )}
    </StyledModalContainer>,
    document.getElementById('modal') as HTMLElement,
  );

export default Modal;
