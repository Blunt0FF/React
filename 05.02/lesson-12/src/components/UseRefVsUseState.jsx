import React, { useRef, useState } from "react";

export default function UseRefVsUseState() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  return (
    <div>
      <h2>useState vs useRef для хранения данных</h2>
      <p>useState - {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + use state
      </button>
      <p>useRef - {}</p>
      <button
        onClick={() => {
          countRef.current = countRef.current + 1;
          console.log(countRef.current);
        }}
      >
        + use ref
      </button>
    </div>
  );
}
