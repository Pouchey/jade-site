import Icon from '_components/icon';

import { StyledDarkTitle } from '_style/common';

import Form from './form';
import {
  StyledContainer,
  StyledAuth,
  StyledPanel,
  StyledWelcome,
} from './style';

export default () => {
  return (
    <StyledContainer>
      <StyledPanel>
        <Icon glyph="guitare" size={400} color="white" />
        <StyledDarkTitle>Jade Rowley</StyledDarkTitle>
      </StyledPanel>
      <StyledAuth>
        <StyledWelcome>Welcome back</StyledWelcome>
        <Form onSubmit={(data) => console.log(data)} />
      </StyledAuth>
    </StyledContainer>
  );
};
