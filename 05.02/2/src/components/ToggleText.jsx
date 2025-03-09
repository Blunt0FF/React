import React, { useEffect, useRef, useState } from 'react';
import './ToggleText.css';

export default function ToggleText() {
    const [anime, setAnime] = useState(0.1);
    const [show, setShow] = useState(true);
    const ref = useRef();

    function toggle() {
        if (show) {
            // Скрытие текста с анимацией
            if (ref.current) {
                ref.current.classList.remove("opening");
                ref.current.classList.add("closing");
            }
            setTimeout(() => {
                setShow(false); // Меняем состояние только после окончания анимации
            }, anime * 1000); // Задержка по времени анимации
        } else {
            setShow(true);
        }
    }

    function handleChange(e) {
        setAnime(Number(e.target.value));
    }

    // useEffect(() => {
    //     if (ref.current) {
    //         ref.current.classList.remove("closing");
    //         ref.current.classList.add("opening");
    //     }
    // }, [show]);

    return (
        <div>
            <h1>Скрытие и отображение контента с анимацией</h1>
            <button onClick={toggle}>{show ? 'Скрыть текст' : 'Показать текст'}</button>
            <input type="number" onChange={handleChange} value={anime} min="0" step="0.1" />
            <p
                ref={ref}
                className={`text ${show ? 'opening' : 'closing'}`}
                style={{ transitionDuration: `${anime}s`, opacity: show ? 1 : 0 }}
            >
                Скрываемый текст
            </p>
        </div>
    );
}