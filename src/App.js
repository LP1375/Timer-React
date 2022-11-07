import React, {useState , useEffect} from "react";
import './App.css';
import {getPadTime} from "./helpers/getPadTime";

function App() {
    const [timeLeft, setTimeLeft] = useState(2 * 60)
    const [isCounting, setIsCounting] = useState(false)

    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(timeLeft - minutes * 60)

    useEffect(() => {
        const  interval = setInterval(() => {
            isCounting &&
                setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000)
        if(timeLeft === 0) setIsCounting(false)
        return () => {
            clearInterval(interval)
        }
    }, [timeLeft, isCounting])

    const startTimer = () => {
        if(timeLeft === 0) setTimeLeft(2 * 60)
        setIsCounting(true)
    }
    const stopTimer = () => {
        setIsCounting(false)
    }
    const resetTimer = () => {
        setIsCounting(false)
        setTimeLeft(2 * 60)
    }

  return (
    <div className="App">
      <div className="container">
          <div className='timer'>
              <h1>COUNTDOWN TO WIN</h1>
              <span className='tim'>{minutes}</span>
              <span className='tim'>:</span>
              <span className='tim'>{seconds}</span>
          </div>
          <div className='buttons'>
              {isCounting ? (
                  <button className='btnStop' onClick={stopTimer}>Stop</button>
              ) : (
                  <button className='btnStart' onClick={startTimer}>Start</button>
              )}
            <button className='btnReset' onClick={resetTimer}>Reset</button>
          </div>
      </div>
    </div>
  );
}

export default App;
