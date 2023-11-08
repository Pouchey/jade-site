import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.color.white};

  > div:first-child {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
`;

export const StyledBar = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.color.grey50};
`;

interface IStyledActiveProps {
  $activeIndex: number;
  $total: number;
}

export const StyledActive = styled.span<IStyledActiveProps>`
  position: absolute;
  top: 0;
  height: 10px;
  background-color: ${({ theme }) => theme.color.green1};
  border-radius: 4px;
  transition: left 0.2s ease-in-out;

  ${({ $activeIndex, $total }) => `
    width: ${100 / $total}%;
    left: ${(100 / $total) * $activeIndex}%;
  `}
`;
