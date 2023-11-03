import { createPortal } from 'react-dom';

import Icon from '_components/icon';
import Loader from '_components/loader';

import { ModalContainer, ModalContent, ModalInfo } from './style';

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
  info: string;
  onClose: () => void;
}

const Modal = ({ children, isLoading, info, onClose }: Props) =>
  createPortal(
    <ModalContainer className="modal" onClick={onClose}>
      {isLoading ? (
        <Loader size={32} />
      ) : (
        <ModalContent>
          <ModalInfo>
            <Icon glyph="info" />
            <span>{info}</span>
          </ModalInfo>
          {children}
        </ModalContent>
      )}
    </ModalContainer>,
    document.getElementById('modal') as HTMLElement,
  );

export default Modal;
