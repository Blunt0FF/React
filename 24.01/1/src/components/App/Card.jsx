import React from "react";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import styles from "./Card.module.css";

export default function Card({id, emoji, isFlipped, isMatched}) {
    const {handleClick} = useContext(GameContext);
    return (
       <button className={isFlipped ? styles.flipped : styles.card} onClick={() => handleClick(id)} disabled={isMatched}>
        {isFlipped ? emoji : '❓'}
        
       </button>
    );
}