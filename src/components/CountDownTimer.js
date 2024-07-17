import { useState, useEffect, useRef } from "react";

export default function CountDownTimer({ initialCount }) {
  const [currentCount, setCurrentCount] = useState(initialCount);
  const [isPaused, setIsPaused] = useState(false);

  const timer = useRef(null);
  console.log(timer.current);

  useEffect(() => {
    if (currentCount > 0 && !isPaused) {
      timer.current = setInterval(() => {
        setCurrentCount((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [currentCount, isPaused]);

  const onPause = () => {
    setIsPaused(true);
    clearInterval(timer.current);
  };
  const onResume = () => {
    setIsPaused(false);
  };
  const onReset = () => {
    setCurrentCount(10);
  };

  return (
    <>
      <h1>{currentCount}</h1>
      <button onClick={onPause}>pause</button>
      <button onClick={onResume}>resume</button>
      <button onClick={onReset}>reset</button>
    </>
  );
}
