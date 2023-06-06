import { createPortal } from 'react-dom';

import { ModalContainer, ModalContent } from './style';
import { ModalProps } from './types';

const Modal = ({ children, isLoading }: ModalProps) =>
  createPortal(
    <ModalContainer className="modal">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ModalContent>{children}</ModalContent>
      )}
    </ModalContainer>,
    document.getElementById('modal') as HTMLElement
  );

export default Modal;
