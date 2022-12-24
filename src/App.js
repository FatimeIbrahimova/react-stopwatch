
// import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';


function App() {
  const timerRef = useRef(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [reset, setReset] = useState(false);
  const [count, setCount] = useState(0);
  const startHandle = () => {
    if (timerRef.current) { return; }
    timerRef.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    setStart(true);
    setStop(false);
    setReset(false);
  }
  const stopHandle = () => {
    clearInterval(timerRef.current);
    console.log("clic");
    timerRef.current = 0;
    setStart(false);
    setStop(true);
    setReset(false);
  }
  const resetHandle = () => {
    clearInterval(timerRef.current);
    setCount(0);
    setStart(false);
    setStop(false);
    setReset(true);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>Stop Watch</h1>
      <p>Timer:{count}s</p>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => startHandle()} variant={start ? "outlined" : "contained"} color="success">
          Start
        </Button>
        <Button onClick={() => stopHandle()} variant={stop ? "outlined" : "contained"} color="error">
          Stop
        </Button>
        <Button onClick={() => resetHandle()} variant={reset ? "outlined" : "contained"} color="warning">Reset</Button>
      </Stack>
    </div>
  );
}

export default App;
