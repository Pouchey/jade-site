import React from 'react';

import Image from '_components/image';

import { getImageUrl } from '_modules/file/utils';

import { TSong } from '_shared/song/types';

import {
  StyledImageWrapper,
  StyledContentWrapper,
  StyledSongWrapper,
} from './style';

interface Props {
  children?: React.ReactNode;
  song: TSong;
  isSelected?: boolean;
  onSelect?: (songId: number) => void;
}

const Song = ({ children, song, isSelected, onSelect }: Props) => {
  const imageUrl = getImageUrl(song.icon);

  const selectable = onSelect !== undefined;

  const handleSelect = () => {
    onSelect && onSelect(song.id);
  };

  return (
    <StyledSongWrapper
      $isSelected={isSelected}
      $selectable={onSelect !== undefined}
      onClick={selectable ? handleSelect : undefined}
    >
      <StyledImageWrapper>
        <Image url={imageUrl} alt={song.title} size={64} />
      </StyledImageWrapper>
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </StyledSongWrapper>
  );
};

export default Song;
