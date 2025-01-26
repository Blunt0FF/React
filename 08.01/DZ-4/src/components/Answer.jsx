import React, { useState } from 'react'

export default function Answer({a, b, updatePoints}) {
    const [userAnswer, setUserAnswer] = useState('');
    const handleSubmit= (e) => {
        e.preventDefault();
        const correctAnswer = a + b;
        if (parseInt(userAnswer) === correctAnswer) {
            updatePoints(true)
        } else {
            updatePoints(false)
        }
        setUserAnswer('')
    }
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="number"
      value={userAnswer}
      onChange={(e) => setUserAnswer(e.target.value)}
      placeholder="Введите ответ"
    />
    <button type="submit">Submit</button>
  </form>  )
}
