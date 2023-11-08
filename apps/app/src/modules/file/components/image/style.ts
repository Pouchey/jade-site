import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.grey90};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledPlus = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const StyledInputFileWrapper = styled.div`
  position: relative;

  &:hover {
    ${StyledPlus} {
      opacity: 1;
    }
  }
`;
