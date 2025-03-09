import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import GameBoard from "./GameBord";

export default function MainComponent() {
    const { turns, matchesLeft, reset, win } = useContext(GameContext);
    return (
        <div>
            <div className="stats">
                <h1>Ходы: {turns}</h1>
                <h1>Осталось пар: {matchesLeft}</h1>
            </div>
            <GameBoard />
            <button className="reset-button" onClick={reset}>Начать заново</button>
            {win && <h1 className="win-message">Победа! 🎉</h1>}
        </div>
    );
}