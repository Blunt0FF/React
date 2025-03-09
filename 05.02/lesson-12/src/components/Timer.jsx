import { useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    const intId = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    console.log("Interval with ID - ", intId);
    intervalRef.current = intId;
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <div>
      <h1>Timer (useRef)</h1>
      <p>Time: {time}</p>
      <button disabled={intervalRef.current} onClick={startTimer}>
        Start
      </button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
