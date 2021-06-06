import { FC } from "react";
import { cards } from "../data/cards";
import { CardSass } from "./CardSass";
import "./styles.scss";

export const CardContainerSass: FC = () => {
    return (
    <div className="card-container">
        {cards.map(({ id, bgColor }) => {
            return <CardSass key={id} text={`Card #${id}`} bgColor={bgColor} isBig={id === 4} />
        })}
    </div>
    );
}