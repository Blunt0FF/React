import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function GameBoard() {
    const {cards} = useContext(GameContext);
    return (
        <div className="main-component">
         {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              emoji={card.emoji}
              isFlipped={card.isFlipped}
              isMatched={card.isMatched}
            />
          ))}
        </div>
       
    );
}