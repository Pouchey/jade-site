import styled from 'styled-components';
import { rgba } from 'polished';


export interface StyledSongProps {
  $requested: boolean;
}

export const StyledSongItemWrapper = styled.div<StyledSongProps>`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.green1};

  ${({ $requested, theme }) => 
    $requested && 
    `
    background: repeating-linear-gradient(
      45deg,
      ${theme.color.white} 0 12px,
      ${rgba(theme.color.green1, 0.5)} 12px 16px
    );
    `

  };
`;

export const StyledImageWrapper = styled.div`
  min-width: 64px;
  min-height: 64px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.grey30};
  border-radius: 8px;
`;

export const StyledInformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
`;

export const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 64px;
  padding-top: 4px;
  overflow: hidden;
`;

export const StyledSongName = styled.div`
  font-size: ${({ theme }) => theme.size.tall};
  font-weight: ${({ theme }) => theme.weight.medium};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StyledArtist = styled.div`
  width: 100%;
  align-self: flex-end;
  text-align: end;
  overflow: hidden;
  font-size: ${({ theme }) => theme.size.tall};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StyledRequester = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;