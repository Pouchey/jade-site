import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '_components/button';
import Modal from '_components/modal';

const Donate = React.memo(() => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <Modal
      onClose={handleClose}
      info="This feature is still under development. But feel free to use Jade's donation box."
    >
      <Button label="Ok" onClick={handleClose} />
    </Modal>
  );
});

export default Donate;
