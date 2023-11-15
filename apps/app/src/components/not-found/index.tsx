import React from 'react';

import Icon from '_components/icon';

import {
  StyledNotFound,
  StyledIconWrapper,
  StyledTitle,
  StyledSubtitle,
  StyledLink,
  StyledContainer,
} from './style';

const NotFoundPage = React.memo(() => {
  return (
    <StyledContainer>
      <StyledNotFound>
        <StyledTitle>404 Not Found</StyledTitle>
        <StyledIconWrapper>
          <Icon glyph="guitare" size={200} />
        </StyledIconWrapper>
        <StyledSubtitle>
          Oops! The page you&apos;re looking for might be somewhere else. <br />
          Go back <StyledLink href="/">home</StyledLink>
        </StyledSubtitle>
      </StyledNotFound>
    </StyledContainer>
  );
});

export default NotFoundPage;
