import react from 'react'
import './App.css';

function checkNum(time) {
  if(time < 10) {
     time = `0${time}`
     return time
  }
   return time;
}

function App() {
  const [titele, setTitele] = react.useState('Lets go start pomodoro !!!')
  const [timeLeft, setTimeLeft] = react.useState(25*60);
  const intervalRef = react.useRef(null);
  
  function startTimer() {
    setTitele('just do it !')
    intervalRef.current = setInterval( () => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return  timeLeft - 1;
        rest();  
      return 0; 
      })    
    },1000)
  }

  function rest() {
    clearInterval(intervalRef.current);
    setTimeLeft(5*60);
    intervalRef.current = setInterval( () => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return  timeLeft - 1;
        resetTimer();  
      return 0; 
      })    
    },1000)
    setTitele('rest time')
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    setTitele('Keep it up !')
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    setTimeLeft(25*60);
    setTitele('next round ?')
  }

  const minites = checkNum(Math.floor(timeLeft / 60));
  const seconds = checkNum(timeLeft - minites * 60);

  

  return (
    <div className="App">
      <h2>{titele}</h2>

      <div className='timer'>
        <span>{minites}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className='button'>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
