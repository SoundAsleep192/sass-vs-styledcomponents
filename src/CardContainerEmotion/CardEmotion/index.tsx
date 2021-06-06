import { FC } from "react";
import { CardContainerStyled } from "./styles";

interface CardEmotionProps {
    text: string;
    isBig: boolean;
    bgColor: string;
}

export const CardEmotion: FC<CardEmotionProps> = ({ bgColor, isBig, text }) => {
    return (
    <CardContainerStyled bgColor={bgColor} isBig={isBig}>
        {text}
    </CardContainerStyled>
    );
}