import React, { useState } from 'react';

const Child = React.memo(({ count }) => {
  console.log("Child rendered");

  return <div>Count: {count}</div>;
});

const Input = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count}/>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text: {text}</p>
    </div>
  );
};

export default Input;