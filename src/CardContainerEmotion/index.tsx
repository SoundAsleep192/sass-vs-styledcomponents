import { FC } from "react";
import { cards } from "../data/cards";
import { CardEmotion } from "./CardEmotion";
import { WrapperStyled } from "./styles";

export const CardContainerEmotion: FC = () => {
    return (
    <WrapperStyled>
        {cards.map(({ id, bgColor }) => {
            return <CardEmotion key={id} text={`Card #${id}`} bgColor={bgColor} isBig={id === 4} />
        })}
    </WrapperStyled>
    );
}