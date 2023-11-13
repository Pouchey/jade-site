import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import Button from '_components/button';
import Icon from '_components/icon';

import AuthForm from '_modules/auth/components/form';
import { useAuthContext } from '_modules/auth/hooks/useContext';
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
  const { state } = useAuthContext();
  const navigate = useNavigate();

  const locationState = useLocation().state as { from: string };

  const { mutate, isPending } = useLogin();

  const handleSubmit = (formData: TAuthForm) => {
    mutate(formData);
  };

  const handleClick = () => {
    navigate('/');
  };

  if (state.isLogged)
    return <Navigate to={locationState?.from || '/'} replace={true} />;

  return (
    <StyledContainer>
      <StyledPanel>
        <Icon glyph="guitare" size={400} color="white" />
        <StyledDarkTitle>Jade Rowley</StyledDarkTitle>
      </StyledPanel>
      <StyledAuth>
        <StyledWelcome>Welcome back</StyledWelcome>
        <AuthForm onSubmit={handleSubmit} isLoading={isPending} />
        <Button color="primary" label="Go to home" onClick={handleClick} />
      </StyledAuth>
    </StyledContainer>
  );
});

export default Auth;
