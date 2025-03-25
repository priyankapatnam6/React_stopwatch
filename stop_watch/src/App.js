import logo from './logo.svg';
import './App.css';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0); // To store elapsed time
  const [running, setRunning] = useState(false); // To track if the stopwatch is running
  const [paused, setPaused] = useState(false); 

  // Start the stopwatch
  const handleStart = () => {
    setStartTime(new Date()); // Set the start time
    setRunning(true);
     // Set stopwatch to running
     setPaused(false);
  };
  const handlePause = () => {
    setRunning(false); // Stop the stopwatch from running
    setPaused(true); // Set paused to true
  };

  // Resume the stopwatch
  const handleResume = () => {
    setStartTime(new Date() - elapsedTime * 1000); // Resume from where we left off
    setRunning(true); // Set stopwatch to running
    setPaused(false); // Clear the paused state
  };

  // Stop the stopwatch
  const handleStop = () => {
    setRunning(false); // Stop the stopwatch
  };

  // Reset the stopwatch
  const handleRestart = () => {
    setRunning(false); // Stop the stopwatch
    setElapsedTime(0); // Reset the elapsed time
  };

  // Use an effect to update elapsed time when the stopwatch is running
  useEffect(() => {
    let interval;
    if (running && startTime) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((new Date() - startTime) / 1000)); // Update elapsed time in seconds
      }, 1000);
    } else {
      clearInterval(interval); // Clear interval when not running
    }
    return () => clearInterval(interval); // Cleanup on unmount or stop
  }, [running, startTime,paused])


  return (
    <div className="App">
     <h1>STOP WATCH USING REACT</h1>
      <div className='container'>
      <h2 >{elapsedTime} seconds</h2>

      <div className='content'>

<Button size='small' onClick={handleStart} variant='contained'>START</Button> &nbsp;
<Button size='small' onClick={handleStop} variant='contained'>STOP</Button>&nbsp;
<Button size="small" onClick={handlePause} variant="contained" disabled={paused || !running}>PAUSE</Button> &nbsp;
<Button size="small" onClick={handleResume} variant="contained" disabled={!paused}>RESUME</Button> &nbsp;
<Button size="small" onClick={handleRestart} variant="contained">RESET</Button>
</div>
      </div>

     
    </div>
  );
}

export default App;
