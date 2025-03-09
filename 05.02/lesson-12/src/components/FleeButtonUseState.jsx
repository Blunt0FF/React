import { useState } from "react";

/*
 * Компонент, который использует useState для управления координатами кнопки.
 * Реакт пере-рисовывает кнопку при каждом обновлении состояния.
 */
export default function FleeButtonUseState() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  function handleMouseMove() {
    const randomX = Math.random() * 500;
    const randomY = Math.random() * 500;

    setCoordinates({ x: randomX, y: randomY });
  }

  return (
    <div
      style={{
        position: "relative",
        height: "500px",
        width: "500px",
        border: "2px dashed black",
      }}
    >
      <button
        style={{
          position: "absolute",
          transition: "all 0.2s ease",
          top: coordinates.y,
          left: coordinates.x,
        }}
        onMouseMove={handleMouseMove}
      >
        Click me
      </button>
    </div>
  );
}
