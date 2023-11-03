import { createPortal } from 'react-dom';

import Loader from '_components/loader';

import { ModalContainer, ModalContent } from './style';

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Modal = ({ children, isLoading }: Props) =>
  createPortal(
    <ModalContainer className="modal">
      {isLoading ? (
        <Loader size={32} />
      ) : (
        <ModalContent>{children}</ModalContent>
      )}
    </ModalContainer>,
    document.getElementById('modal') as HTMLElement,
  );

export default Modal;
