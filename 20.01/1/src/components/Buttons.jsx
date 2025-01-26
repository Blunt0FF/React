import { useContext } from 'react';
import CounterContext from '../context/CounterContext';

export default function Buttons() {
  const { count, inc, dec } = useContext(CounterContext);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={inc}>Увеличить</button>
      <button onClick={dec}>Уменьшить</button>
    </div>
  )
}