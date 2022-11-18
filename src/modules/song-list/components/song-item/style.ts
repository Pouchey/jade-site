import styled from 'styled-components';

export const StyledSongItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 100px;
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
`;

export const StyledImageWrapper = styled.div`
  min-width: 50px;
  min-height: 50px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.grey30};
  border-radius: 8px;
`;

export const StyledInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
`;

export const StyledDesc = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const StyledSongName = styled.div`
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${({ theme }) => theme.size.tall};
  white-space: nowrap;
  text-transform: uppercase;
  text-overflow: ellipsis;
`;

export const StyledArtist = styled.div`
  overflow: hidden;
  font-size: ${({ theme }) => theme.size.tall};
  white-space: nowrap;
  text-transform: uppercase;
  text-overflow: ellipsis;

  ::before {
    margin: 0 8px;
    content: '-';
  }
`;

export const StyledCountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
