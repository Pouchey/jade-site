import React from 'react';

import Loader from '_components/loader';

import { dislikeSong, likeSong } from '_modules/player/services/socket';
import Song from '_modules/song/components/song';
import { getSocketToken } from '_modules/auth/utils';

import { TSong } from '_shared/song/types';

import Fake from './fake';
import { StyledSongItemList } from './style';

interface Props {
  songs?: TSong[];
  isLoading?: boolean;
}

const RequestedSongs = ({ songs, isLoading = false }: Props) => {
  if (isLoading) return <Loader label="Loading songs..." />;

  if (!songs?.length) return <Fake />;

  const handleClick = (song: number) => {
    const s = songs.find(s => s.id === song);
    const like = s?.likes?.find(like => like === getSocketToken());
    if(like){
      dislikeSong(song);
    }
    else{
      likeSong(song);

    }
  };

  return (
    <StyledSongItemList>
      {songs?.map((song) => (
        <Song key={song.id} song={song} onClick={handleClick} />
      ))}
    </StyledSongItemList>
  );
};

export default RequestedSongs;
