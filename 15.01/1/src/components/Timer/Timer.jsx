import { useEffect, useState } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Устанавливаем интервал, который каждую секунду меняет seconds
    const timerId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000)

    // Функция очистки
    return () => {
      clearInterval(timerId) // Очищаем таймер
    }
  }, []) // Вызов 1 раз, потому что массив пустой

  return <div>{seconds}</div>
}
