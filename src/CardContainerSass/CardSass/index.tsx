import { FC } from "react";
import styles from  "./styles.scss";

console.log({styles});

interface CardSassProps {
    text: string;
    isBig: boolean;
    bgColor: string;
}

export const CardSass: FC<CardSassProps> = ({ text, bgColor, isBig }) => {
    return (
        <div className={styles.card} style={{ backgroundColor: bgColor, width: isBig ? '300px' : '80px'}}>
            {text}
        </div>
    );
};
