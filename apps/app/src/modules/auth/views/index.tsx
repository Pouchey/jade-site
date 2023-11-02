import React from 'react';

import Icon from '_components/icon';

import AuthForm from '_modules/auth/components/form';
import { useLogin } from '_modules/auth/hooks/useServices';
import { TAuthForm } from '_modules/auth/types/form';

import { StyledDarkTitle } from '_style/common';

import {
  StyledContainer,
  StyledAuth,
  StyledPanel,
  StyledWelcome,
} from './style';

const Auth = React.memo(() => {
  const { mutate } = useLogin();

  const handleSubmit = (formData: TAuthForm) => {
    mutate(formData);
  };

  return (
    <StyledContainer>
      <StyledPanel>
        <Icon glyph="guitare" size={400} color="white" />
        <StyledDarkTitle>Jade Rowley</StyledDarkTitle>
      </StyledPanel>
      <StyledAuth>
        <StyledWelcome>Welcome back</StyledWelcome>
        <AuthForm onSubmit={handleSubmit} />
      </StyledAuth>
    </StyledContainer>
  );
});

export default Auth;
