import { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPending, setIsPending] = useState(false);
  let s = seconds;
  let m = minutes;

  useEffect(() => {
    if (s == 60) {
      if (m < 10) {
        setMinutes(`0${Number(m) + 1}`);
      } else {
        setMinutes(Number(m) + 1);
      }
      setSeconds(0);
    } else if (s === 0) {
      setSeconds(`0${s}`);
    } else if (m === 0) {
      setMinutes(`0${m}`);
    }
  });

  const secondLess = () => {
    if (s !== 0) {
      setSeconds(s);
      s -= 1;
      if (s < 10) {
        setSeconds(`0${s}`);
      } else {
        setSeconds(s);
      }
    } else {
      setSeconds(0);
    }
  };

  const minuteLess = () => {
    if (m > 0) {
      if (s <= 0) {
        m -= 1;
        s = 59;
      }
    }
    setMinutes(m);
  };
  const active = () => {
    var interval = setInterval(() => {
      secondLess();
      minuteLess();
      if (s == 0 && m == 0) {
        clearInterval(interval);
      }
    }, 1000);
    setIsPending(true);
  };

  const addTime = () => {
    if (seconds === 0) {
      setSeconds(10);
    } else {
      s = Number(seconds) + 10;
      setSeconds(s);
    }
  };

  const pause = () => {
    setIsPending(false);
  };

  let btnTester = s == 0 && m == 0;

  return (
    <div>
      <div className="timer-bg">
        <div className="timer-display">
          <span>
            {minutes}:{seconds}
          </span>
          {!isPending && <button className="play" onClick={active}></button>}
          {btnTester && <button className="play stop"></button>}
          {isPending && <button className="pause" onClick={pause}></button>}
        </div>
      </div>
      <button onClick={addTime}>10+</button>
    </div>
  );
};
export default Timer;
