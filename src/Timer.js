import { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  let m = minutes;
  let s = seconds;
  useEffect(() => {
    if (minutes === 0) {
      setMinutes("00");
    } else if (seconds === 0) {
      setSeconds("00");
    }
  });

  const timerFn = () => {
    if (s > 0) {
      if (s > 10) {
        --s;
      } else {
        s = `0${--s}`;
      }
    } else {
      setSeconds(0);
      if (m > 0) {
        m--;
        s = 59;
        if (m < 10) {
          m = `0${m}`;
        }
      } else {
        m = 0;
      }
      setMinutes(m);
    }

    return setSeconds(s);
  };

  const active = () => {
    setInterval(timerFn, 1000);
  };

  return (
    <div>
      <div className="timer-bg">
        <div className="timer-display">
          <span>
            {minutes}:{seconds}
          </span>
          <button onClick={active}></button>
        </div>
      </div>
    </div>
  );
};
export default Timer;
