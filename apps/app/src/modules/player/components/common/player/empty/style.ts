import styled from 'styled-components';

export const StyledDescContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const StyledInfoSearch = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 32px;
  grid-gap: 16px;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const StyledText = styled.div`
  margin-bottom: 8px;
  overflow: hidden;
  font-size: ${({ theme }) => theme.size.huge};
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
`;
