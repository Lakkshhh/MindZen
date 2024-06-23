import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './FocusSession.css'; // Import CSS file for styling

const FocusSession = () => {
  const [time, setTime] = useState(30 * 60); // Default to 30 minutes
  const [isActive, setIsActive] = useState(false);
  const [customTime, setCustomTime] = useState(30); // Default to 30 minutes
  const [alarmPlayed, setAlarmPlayed] = useState(false); // State to track if alarm has played
  const [pauseButtonState, setPauseButtonState] = useState(0); // State to track pause button state
  const [showConfetti, setShowConfetti] = useState(false); // State to control confetti animation

  const toggle = () => {
    if (pauseButtonState === 0) {
      setIsActive(true); // Start the timer
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
    setAlarmPlayed(false); // Reset alarm played state
    setPauseButtonState(0); // Reset pause button state
    setShowConfetti(false); // Reset confetti state
  };

  const handleCustomTimeChange = (e) => {
    const value = parseInt(e.target.value); // Parse selected value as integer
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
      setAlarmPlayed(true); // Set alarm played state to true after playing once
      setShowConfetti(true); // Show confetti when timer reaches 0
      setTimeout(() => {
        setShowConfetti(false); // Hide confetti after 10 seconds
      }, 10000);
      setPauseButtonState(0);
    }
    return () => clearInterval(interval);
  }, [isActive, time, alarmPlayed]);

  const playAlarm = () => {
    const alarm = new Audio('http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV2/ALARM2.WAV'); // Replace with actual path to alarm sound
    alarm.play();
  };

  // Generate options for select dropdown (0 to 120 minutes with 15-minute intervals)
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



