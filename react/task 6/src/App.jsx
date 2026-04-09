import React, { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>

      <h2 className="time">{formatTime()}</h2>

      <div className="buttons">
        <button className="start" onClick={() => setRunning(true)}>
          Start
        </button>
        <button className="stop" onClick={() => setRunning(false)}>
          Stop
        </button>
        <button
          className="reset"
          onClick={() => {
            setRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;