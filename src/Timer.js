import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft, isTyping }) => {
  useEffect(() => {
    let timer;
    if (isTyping && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTyping, timeLeft]);

  return (
    <div className="timer">
      <p>Time Left:</p>
      <span><b>{timeLeft}</b>s</span>
    </div>
  );
};

export default Timer;
