import { StyledContainer, StyledAuth, StyledPanel,StyledWelcome } from "./style"

import Icon from "_components/icon"
import Form from './form'
import { StyledDarkTitle } from "_style/common"

export default () => {




  return (
    <StyledContainer>
      <StyledPanel>
        <Icon glyph="guitare" size={400} color="white" />
        <StyledDarkTitle>Jade Rowley</StyledDarkTitle>
      </StyledPanel>
      <StyledAuth>
        <StyledWelcome>
          Welcome back
        </StyledWelcome>
        <Form onSubmit={(data) => console.log(data)}/>
      </StyledAuth>

    </StyledContainer>
  )
}