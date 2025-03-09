import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import styles from "./Card.module.css";

export default function Card({ id, emoji, isFlipped, isMatched }) {
    const { handleClick } = useContext(GameContext);
    return (
        <button
            className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
            onClick={() => handleClick(id)}
            disabled={isMatched}
        >
            <div className={styles.front}>❓</div>
            <div className={styles.back}>{emoji}</div>
        </button>
    );
}