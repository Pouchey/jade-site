import { rgba } from 'polished';
import styled from 'styled-components';

import { StyledSongItemWrapper, StyledDesc, StyledArtist } from '../style';

export interface StyledSongProps {
  $selected: boolean;
}

export const StyledClickableSongItemWrapper = styled(
  StyledSongItemWrapper,
)<StyledSongProps>`
  cursor: pointer;

  ${({ $selected, theme }) =>
    $selected &&
    `
      background: repeating-linear-gradient(
        45deg,
        ${theme.color.white} 0 12px,
        ${rgba(theme.color.green1, 0.5)} 12px 16px
      );
      cursor: auto;

    `};
`;

export const StyledRequester = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;

  p {
    color: ${({ theme }) => theme.color.red1};
  }
`;

export const StyledSelectDesc = styled(StyledDesc)`
  max-height: 64px;
  padding-top: 4px;
`;

export const StyledSelectArtist = styled(StyledArtist)`
  align-self: flex-end;
  width: 100%;
  text-align: end;
`;

export const StyledSongName = styled.div`
  font-size: ${({ theme }) => theme.size.tall};
  font-weight: ${({ theme }) => theme.weight.medium};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;
