import { useMemo } from 'react';

const generateList = (size) => {
  console.log("Generating list...");
  return Array.from({ length: size }, (_, index) => `Item №${index + 1}`);
  // ['Item №1', 'Item №2', ''Item №3']
};

export default function ListComponent({ size }) {
  const list = useMemo(() => generateList(size), [size]);

  return (
    <ul>
      {list.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}