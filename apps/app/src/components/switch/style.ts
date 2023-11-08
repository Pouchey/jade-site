import styled from "styled-components";

export interface StyledSwitchProps {
    $checked: boolean;
}


export const StyledSwitchContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

`;

export const StyledSwitch = styled.div`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
`;

export const StyledSlider = styled.span<StyledSwitchProps>`
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: ${({ theme }) => theme.color.beige1};
    transition: 0.4s;
    border-radius: 24px;

    &:before{
        position: absolute;
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        background-color: ${({ theme }) => theme.color.green1};
        transition: 0.4s;
        border-radius: 50%;
        content: '';

        ${({ $checked }) => 
            $checked && 
            `
                -webkit-transform: translateX(22px);
                -ms-transform: translateX(22px);
                transform: translateX(22px);
            `};

    }

    ${({ $checked, theme }) => 
        $checked && 
        `
            background-color: ${theme.color.green2};
        `};

    &:focus{
        box-shadow: 0 0 1px ${({ theme }) => theme.color.green2};

    }
        
`;

export const StyledCheckbox = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

`;


