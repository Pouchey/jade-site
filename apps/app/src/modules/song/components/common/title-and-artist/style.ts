import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  0% { transform: translate3d(0%, 0, 0); }
  30% { transform: translate3d(-100%, 0, 0); }
  60% { transform: translate3d(0%, 0, 0); }
`;

export type StyledSongNameProps = {
  $isOverflow: boolean;
};

export const StyledSongName = styled.div<StyledSongNameProps>`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 100%;
  overflow: hidden;

  span {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    width: max-content;
    min-width: 100%;
    font-size: ${({ theme }) => theme.size.tall};
    font-weight: ${({ theme }) => theme.weight.medium};
    text-transform: uppercase;
    white-space: nowrap;
    transform: translateX(0);
    animation: ${marquee} 15s linear 2s infinite;

    ${({ $isOverflow }) =>
      !$isOverflow &&
      `
      animation: none;
    `}
  }
`;

export const StyledArtist = styled.div`
  overflow: hidden;
  font-size: ${({ theme }) => theme.size.tall};
  font-weight: ${({ theme }) => theme.weight.regular};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;
