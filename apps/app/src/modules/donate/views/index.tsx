import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '_components/button';
import Modal from '_components/modal';
import {StripeElementsOptions, loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DonateForm from '../components/form';
import { useGetSecret } from '_modules/donate/hooks/useServices'
import Loader from '_components/loader';

const stripe = loadStripe("pk_test_51OEWY5LQzG1Vs6Xz2gyPsJIoMFmbd2Eybih4UZNKgmY7IPO8AmnFPBH7EGDeU6zaCNQ54Z1YY4Ya1qQ6ctK4Nf3G002hOOeIYE");

const Donate = React.memo(() => {
  const [secret, setSecret] = useState<StripeElementsOptions>();
  const navigate = useNavigate();

  useEffect(() => {
    useGetSecret().then((data) => {setSecret(data.data)})

  }, [])
 

  const handleClose = () => {
    navigate(-1);
  };

  if(secret === undefined)
    return(<Loader />)
  
  return (
/*     <Modal
      onClose={handleClose}
      info="This feature is still under development. But feel free to use Jade's donation box."
    >
      
      <Button label="Ok" onClick={handleClose} />

    </Modal> */
    <Elements stripe={stripe} options={ secret }>
      <DonateForm />
    </Elements>
  );
});

export default Donate;
