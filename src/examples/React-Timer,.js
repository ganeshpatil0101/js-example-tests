import React, {
    useState,
    useEffect,
    Fragment,
    useCallback,
    useRef,
  } from 'react';
  import './style.css';
  
  export default function App() {
    return (
      <div>
        <h1>React Timer!</h1>
        <Solution />
      </div>
    );
  }
  
  const getNumStr = (num) => {
    return num.toString().padStart(2, 0);
  };
  
  const calculateMinAndSec = (m, s) => {
    const mInS = m * 60;
    const tSec = mInS + s;
    const minS = Math.floor(tSec / 60);
    const secS = tSec - minS * 60;
    return { minS, secS };
  };
  
  function Solution() {
    const [time, setTime] = useState({ min: '00', sec: '00' });
    const [inMin, setInMin] = useState(0);
    const [inSec, setInSec] = useState(0);
    const timer = useRef(null);
    const refTime = useRef({ min: 0, sec: 0 });
    const pauseState = useRef(false);
    useEffect(() => {
      return () => {
        clearInterval(timer.current);
      };
    }, []);
  
    const startTimer = () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
      timer.current = setInterval(() => {
        const numMin = parseInt(refTime.current.min);
        let numSec = parseInt(refTime.current.sec);
        if (numMin == 0 && numSec === 0) {
          clearInterval(timer.current);
        }
        numSec = numSec - 1;
        const { minS, secS } = calculateMinAndSec(numMin, numSec);
        refTime.current = { min: minS, sec: secS };
        setTime({ min: getNumStr(minS), sec: getNumStr(secS) });
      }, 1000);
    };
  
    const startHanlder = useCallback(() => {
      const { minS, secS } = calculateMinAndSec(inMin, inSec);
      refTime.current = { min: minS, sec: secS };
      setTime({ min: getNumStr(minS), sec: getNumStr(secS) });
      startTimer();
    }, [time, inMin, inSec]);
  
    const stopHandler = useCallback(() => {
      if (pauseState.current) {
        console.log('resume ');
        pauseState.current = false;
        startTimer();
      } else {
        console.log(' pause ');
        pauseState.current = true;
        clearInterval(timer.current);
      }
    }, []);
  
    const resetHandler = () => {
      clearInterval(timer.current);
      setTime({ min: '00', sec: '00' });
      refTime.current = { min: 0, sec: 0 };
      setInMin(0);
      setInSec(0);
    };
    return (
      <Fragment>
        <h1 data-testid="running-clock">
          {time.min}:{time.sec}
        </h1>
        <label>
          <input
            type="number"
            value={inMin}
            onChange={(e) => setInMin(parseInt(e.target.value))}
          />
          Minutes
        </label>
        <label>
          <input
            type="number"
            value={inSec}
            onChange={(e) => setInSec(parseInt(e.target.value))}
          />
          Seconds
        </label>
        <br />
        <br />
        <button onClick={startHanlder}>START</button> {' | '}
        <button onClick={stopHandler}>PAUSE / RESUME</button> {' | '}
        <button onClick={resetHandler}>RESET</button>
        <br />
      </Fragment>
    );
  }
  