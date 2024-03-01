import React from 'react';

import Label from '_components/label';
import NotFoundPage from '_components/not-found';

import { StyledWrapper } from './style';

const key = import.meta.env.VITE_STRIPE_KEY;
const mode = import.meta.env.MODE;

const Donate = React.memo(() => {
  if (!key) return <NotFoundPage />;

  if (mode === 'development') return <Label content="Stripe key is not set" />;

  return (
    <StyledWrapper>
      {/* @ts-expect-error - StripeBuyButton is not a known element */}
      <stripe-buy-button
        buy-button-id="buy_btn_1OEXBbLQzG1Vs6XzcExZ2a28"
        publishable-key={key}
      />
    </StyledWrapper>
  );
});

export default Donate;
