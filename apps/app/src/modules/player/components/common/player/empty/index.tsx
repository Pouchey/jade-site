import React from 'react';

import guitarsUrl from '_assets/guitars.jpeg';

import Icon from '_components/icon';
import Image from '_components/image';
import Label from '_components/label';

import { resetPlayed } from '_modules/player/services/socket';

import {
  StyledPlayer,
  StyledDesc,
  StyledPlayerSection,
  StyledImageWrapper,
  StyledPlayerInfos,
} from '../style';

import { StyledDescContent, StyledInfoSearch, StyledText } from './style';
import Button from '_components/button';
import { useAuthContext } from '_modules/auth/hooks/useContext';

const Empty = React.memo(() => {

  const { state } = useAuthContext();

  const isLogged = state.isLogged;

  const handleReset = () => {
    resetPlayed();
  }

  return (
    <StyledPlayer>
      <StyledPlayerSection>
        <StyledImageWrapper>
          <Image url={guitarsUrl} alt="guitars" size={100} />
        </StyledImageWrapper>
        <StyledDesc>
          <StyledDescContent>
            <StyledText>No song is playing.</StyledText>
            <Label content="Feel free to request a song!" />
          </StyledDescContent>
        </StyledDesc>
      </StyledPlayerSection>
      <StyledPlayerSection>
        <StyledPlayerInfos>
          <StyledInfoSearch>
            {isLogged 
              ? <Button label='RESET' size='small' onClick={handleReset}/> 
              : <div></div>}
            <div></div>
            <Icon glyph="note" size={32} color="grey75" />
          </StyledInfoSearch>
        </StyledPlayerInfos>
      </StyledPlayerSection>
    </StyledPlayer>
  );
});

export default Empty;
