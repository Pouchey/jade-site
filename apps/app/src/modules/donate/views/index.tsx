import React from 'react';

import { StyledWrapper } from './style';

const Donate = React.memo(() => {
  return (
    <StyledWrapper>
      {/* @ts-expect-error - StripeBuyButton is not a known element */}
      <stripe-buy-button
        buy-button-id="buy_btn_1OEXBbLQzG1Vs6XzcExZ2a28"
        publishable-key="pk_test_51OEWY5LQzG1Vs6Xz2gyPsJIoMFmbd2Eybih4UZNKgmY7IPO8AmnFPBH7EGDeU6zaCNQ54Z1YY4Ya1qQ6ctK4Nf3G002hOOeIYE"
      />
    </StyledWrapper>
  );
});

export default Donate;
