import React, { useState } from 'react'
import Answer from './Answer'

export default function MathQuiz() {
    const a = Math.floor(Math.random()*1000)
    const b = Math.floor(Math.random()*1000)
    const [score, setScore] = useState(0);

    const updatePoints = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1); // Добавляем балл за правильный ответ
        } else {
          setScore(score - 1); // Уменьшаем балл за неправильный ответ
        }
      };
    
    
  return (
<div className="quiz-container">
      <h1>Math Quiz</h1>
      <p>Ваши баллы: {score}</p>
      <p>Сколько будет {a} + {b}?</p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>  )
}
