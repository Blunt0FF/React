import { useRef } from "react";

/*
 * Компонент, который использует useRef для управления кнопкой напрямую.
 * Реакт НЕ пере-рисовывает кнопку при каждом наведении курсора.
 */
export default function FleeButton() {
  const buttonRef = useRef(null);

  function handleMouseMove() {
    const button = buttonRef.current;

    if (button) {
      const randomX = Math.random() * (500 - button.offsetWidth);
      const randomY = Math.random() * (500 - button.offsetHeight);

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
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
        ref={buttonRef}
        style={{
          position: "absolute",
          transition: "all 0.2s ease",
        }}
        onMouseMove={handleMouseMove}
      >
        Click me
      </button>
    </div>
  );
}
