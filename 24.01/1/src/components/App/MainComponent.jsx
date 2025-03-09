import React from "react";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import GameBoard from "./GameBord";

export default function MainComponent() {
    const {turns, matchesLeft,reset, win} = useContext(GameContext);
    return (
        <div>
            <h1>SCORE: {turns}</h1>
            <h1>Matches Left: {matchesLeft}</h1>
            <GameBoard />
            <button onClick={reset}>Reset</button>
            {win && <h1>You Win</h1>}
        </div>
    );
}