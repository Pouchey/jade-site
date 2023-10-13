import { createPortal } from 'react-dom';

import { ModalContainer, ModalContent } from './style';

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Modal = ({ children, isLoading }: Props) =>
  createPortal(
    <ModalContainer className="modal">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ModalContent>{children}</ModalContent>
      )}
    </ModalContainer>,
    document.getElementById('modal') as HTMLElement,
  );

export default Modal;
