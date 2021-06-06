import { FC } from "react";
import "./styles.scss";

interface CardSassProps {
    text: string;
    isBig: boolean;
    bgColor: string;
}

export const CardSass: FC<CardSassProps> = ({ text, bgColor, isBig }) => {
    return (
        <div className="card" style={{ backgroundColor: bgColor, width: isBig ? '300px' : '80px'}}>
            {text}
        </div>
    );
};
