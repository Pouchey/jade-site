import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
    0% { transform: translate3d(0%, 0, 0); }
    100% { transform: translate3d(-100%, 0, 0); }
`;

export const StyledSongItemWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.green1};
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
  gap: 16px;
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
`;

export const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-evenly;
  width: 100%;
  overflow: hidden;
`;

export const StyledSongName = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  overflow: hidden;

  span {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 8px;
    width: max-content;
    min-width: 100%;
    font-size: ${({ theme }) => theme.size.tall};
    font-weight: ${({ theme }) => theme.weight.medium};
    text-transform: uppercase;
    white-space: nowrap;

    transform: translateX(0);
    animation: ${marquee} 10s linear infinite;
  }
`;

export const StyledArtist = styled.div`
  overflow: hidden;
  font-size: ${({ theme }) => theme.size.tall};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StyledCountWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const StyledIconContainer = styled.div`
  cursor: pointer;
`;