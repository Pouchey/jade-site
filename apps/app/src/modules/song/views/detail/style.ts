import styled from 'styled-components';

interface StyledSongProps {
  $isSelected?: boolean;
  $selectable?: boolean;
}

export const StyledSongWrapper = styled.div<StyledSongProps>`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.green1};

  ${({ $selectable }) =>
    $selectable &&
    `
      cursor: pointer;
    `};

  ${({ $isSelected, theme }) =>
    $isSelected &&
    `
      background: repeating-linear-gradient(
        45deg,
        ${theme.color.white} 0 12px,
        ${theme.color.green1} 12px 16px
      );
      cursor: auto;

    `};
`;

export const StyledImageWrapper = styled.div`
  min-width: 64px;
  min-height: 64px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.grey30};
  border-radius: 8px;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
`;
