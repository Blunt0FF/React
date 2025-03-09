import { useRef, useState } from "react";

export default function TimerUseState() {
  const [time, setTime] = useState(0);
  const [invervalId, setIntervalId] = useState(null);

  function startTimer() {
    const intId = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    setIntervalId(intId);
  }

  function stopTimer() {
    clearInterval(invervalId);
  }

  function resetTimer() {
    clearInterval(invervalId);
    setTime(0);
  }

  return (
    <div>
      <h1>Timer (useState)</h1>
      <p>Time: {time}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
