import Icon from '_components/icon';

import { StyledDarkTitle } from '_style/common';

import AuthForm from './form';
import {
  StyledContainer,
  StyledAuth,
  StyledPanel,
  StyledWelcome,
} from './style';

const Auth = () => {
  return (
    <StyledContainer>
      <StyledPanel>
        <Icon glyph="guitare" size={400} color="white" />
        <StyledDarkTitle>Jade Rowley</StyledDarkTitle>
      </StyledPanel>
      <StyledAuth>
        <StyledWelcome>Welcome back</StyledWelcome>
        <AuthForm onSubmit={(data) => console.log(data)} />
      </StyledAuth>
    </StyledContainer>
  );
};

export default Auth;
