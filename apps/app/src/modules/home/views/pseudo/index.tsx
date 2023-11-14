import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '_components/button';
import Input from '_components/input';
import Modal from '_components/modal';

import { setPseudo as setSocketPseudo } from '_modules/player/services/socket';

import { StyledWrapper } from './style';

const Pseudo = React.memo(() => {
  const navigate = useNavigate();
  const [pseudo, setPseudo] = useState('');

  const handleClose = () => {
    navigate(-1);
  };

  const handleChange = (value: string) => {
    setPseudo(value);
  };

  const handleContinue = () => {
    localStorage.setItem('pseudo', pseudo);
    setSocketPseudo(pseudo);
    navigate(-1);
  };

  return (
    <Modal
      onClose={handleClose}
      info="This will allow Jade to know who requested the song."
    >
      <Input
        value={pseudo}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <StyledWrapper>
        <Button label="Skip" onClick={handleClose} />
        <Button label="Continue" onClick={handleContinue} />
      </StyledWrapper>
    </Modal>
  );
});

export default Pseudo;
