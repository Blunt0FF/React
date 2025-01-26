import { useState } from 'react';
import CounterContext from '../context/CounterContext';

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(0)

  const inc = () => setCount(prevCount => prevCount + 1);
  const dec = () => setCount(prevCount => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, inc, dec }}>
      {children}
    </CounterContext.Provider>
  )
}