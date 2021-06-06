import styled from "@emotion/styled";

interface CardContainerStyledProps {
    bgColor: string;
    isBig: boolean;
}

export const CardContainerStyled = styled.div<CardContainerStyledProps>`
    height: 200px;
    width: ${({isBig}) => isBig ? 300 : 80}px;
    padding: 20px;
    color: white;
    border: 3px solid black;
    background-color: ${({bgColor}) => bgColor};
    margin: 0 8px;
    flex-shrink: 0;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        font-weight: bolder;
    }
`;