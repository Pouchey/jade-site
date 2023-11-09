import styled from 'styled-components';

export const StyledFakeImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.grey30};
`;

export const StyledFakeDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const StyledFakeText = styled.div`
  width: 100%;
  height: 16px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.color.grey30};
  border-radius: 8px;
`;

export const StyledFakeCounter = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.grey30};
  border-radius: 8px;
`;
