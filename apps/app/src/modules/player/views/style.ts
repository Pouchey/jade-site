import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
`;

export const StyledPlayerSection = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StyledImageWrapper = styled.div`
  min-width: 100px;
  min-height: 100px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.grey30};
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 ${rgba('#000', 0.1)};
`;

export const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  overflow: hidden;
`;

export const StyledSongName = styled.h1`
  margin-bottom: 8px;
  overflow: hidden;
  font-size: ${({ theme }) => theme.size.huge};
  font-weight: ${({ theme }) => theme.weight.medium};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StyledArtist = styled.h2`
  overflow: hidden;
  font-size: ${({ theme }) => theme.size.huge};
  font-weight: ${({ theme }) => theme.weight.regular};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledPlayerInfos = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  margin-top: 24px;
`;

export const StyledCounterWrapper = styled.div`
  min-width: 100px;
  margin-right: 16px;
`;
