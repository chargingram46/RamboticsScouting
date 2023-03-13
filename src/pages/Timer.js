import React, { useState, useEffect } from 'react';
import './/Timer.css';

//let testButton = 0;

//var ConeCount = '0';
//var CubeCount = '0';

/*<p>Cube Counter:</p>
          <button type="button" onClick={CubeAdd}>{CubeCount}</button>
          <p> </p>
          <p>Cone Counter:</p>
          <button type="button" onClick={ConeAdd}>{ConeCount}</button>

*/
function TimerPage() {
  //const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  var gameMode = 'Unknown';

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(150);
    setIsActive(false);

    //ConeCount = '0';
    //CubeCount = '0';
  }

  /*
  function ConeAdd() {
    ConeCount++;
  }

  function CubeAdd() {
    CubeCount++;
  }
  */

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds => seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  if (seconds > 135) {
    gameMode = 'Auto';
  } else if ( 30 < seconds) {
    gameMode = 'Teleop';
  } else if (seconds > 0) {
    gameMode = 'EndGame';
  } else if (seconds < 1) {
    gameMode = 'GameOver'
  }

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="mode">
      {gameMode}
      </div>
      <div className="count">
          <p> </p>
          
      </div>
      <iframe src="https://script.google.com/macros/s/AKfycbyIpm2mQ04maRBYUsxiEnmcUz_58GnQ1TF4f7PM3vZ9AHWh275fPvJyEAbes5k2CyLsvQ/exec" title="input" class="input"></iframe>
    </div>
  );
};



export default TimerPage;