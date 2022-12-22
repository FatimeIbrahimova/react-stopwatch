
// import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRef,useState } from 'react';


function App() {
  const timerRef = useRef(0);
  const [count,setCount]=useState(0);
  function startHandle() {
    setInterval(() => {
      timerRef.current=timerRef.current+1;
      setCount(timerRef.current);
    }, 1000);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>Stop Watch</h1>
      <p>Timer:{count}s</p>
      <Stack direction="row" spacing={2}>
        <Button onClick={() => startHandle()} variant="contained" color="success">
          Start
        </Button>
        <Button variant="contained" color="error">
          Stop
        </Button>
        <Button variant="contained" color="warning">Reset</Button>
      </Stack>
    </div>
  );
}

export default App;
