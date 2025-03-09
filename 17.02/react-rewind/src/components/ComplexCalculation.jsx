import { useMemo } from 'react';

export default function ComplexCalculation({ number }) {
  const complexCalculation = (num) => {
    console.log('Computing')
    let result = 1;

    for (let i = 0; i < 100; i++) {
      result *= num;
    }
    return result;
  }

  const result = useMemo(() => complexCalculation(number), [number])
  // if prevNumber === number => return prevResult

  return (
    <div>
      Result: {result}
    </div>
  )
}