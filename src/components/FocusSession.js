import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './FocusSession.css'; 

const FocusSession = () => {
  const [time, setTime] = useState(30 * 60); 
  const [isActive, setIsActive] = useState(false);
  const [customTime, setCustomTime] = useState(30); 
  const [alarmPlayed, setAlarmPlayed] = useState(false);
  const [pauseButtonState, setPauseButtonState] = useState(0); 
  const [showConfetti, setShowConfetti] = useState(false); 

  const toggle = () => {
    if (pauseButtonState === 0) {
      setIsActive(true); 
      setPauseButtonState(1);
    } else if (pauseButtonState === 1) {
      setPauseButtonState(2);
    } else if (pauseButtonState === 2) {
      setPauseButtonState(3);
    } else if (pauseButtonState === 3) {
      setPauseButtonState(4);
    } else {
      setIsActive(!isActive);
      setPauseButtonState(0);
    }
  };

  const reset = () => {
    setTime(customTime * 60);
    setIsActive(false);
    setAlarmPlayed(false); 
    setPauseButtonState(0); 
    setShowConfetti(false);
  };

  const handleCustomTimeChange = (e) => {
    const value = parseInt(e.target.value); 
    setCustomTime(value);
    setTime(value * 60);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    if (time === 0 && !alarmPlayed) {
      playAlarm();
      setAlarmPlayed(true); 
      setShowConfetti(true); 
      setTimeout(() => {
        setShowConfetti(false); 
      }, 10000);
      setPauseButtonState(0);
    }
    return () => clearInterval(interval);
  }, [isActive, time, alarmPlayed]);

  const playAlarm = () => {
    const alarm = new Audio('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV'); // Replace with actual path to alarm sound
    alarm.play();
  };

  const options = [];
  for (let i = 15; i <= 120; i += 15) {
    options.push(<option key={i} value={i}>{i} mins</option>);
  }

  let pauseButtonText = '';
  if (pauseButtonState === 0) {
    pauseButtonText = 'Start';
  } else if (pauseButtonState === 1) {
    pauseButtonText = 'Pause';
  } else if (pauseButtonState === 2) {
    pauseButtonText = 'Are you sure?';
  } else if (pauseButtonState === 3) {
    pauseButtonText = "Don't Backout!";
  } else if (pauseButtonState === 4) {
    pauseButtonText = 'Valid reason? If not, don\'t FALTER SOLDIER!!!';
  }

  return (
    <div className="focus-session-container">
      <h2 className="focus-session-title">Focus Session</h2>
      <div className="focus-session-timer">
        <label className="focus-session-label">Set Timer (minutes): </label>
        <select value={customTime} onChange={handleCustomTimeChange} className="focus-session-select">
          {options}
        </select>
      </div>
      <div className="focus-session-time">{`${Math.max(Math.floor(time / 60), 0)}:${Math.max(time % 60, 0) < 10 ? '0' : ''}${Math.max(time % 60, 0)}`}</div>
      <button onClick={toggle} className="focus-session-button start-button">{pauseButtonText}</button>
      <button onClick={reset} className="focus-session-button reset-button">Reset</button>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default FocusSession;



