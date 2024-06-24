import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MeditationSounds.css';

const MeditationSounds = () => {
  const [sounds, setSounds] = useState([]);
  const [currentSound, setCurrentSound] = useState(null);
  const [playingSoundId, setPlayingSoundId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/meditation-sounds')
      .then(response => {
        if (Array.isArray(response.data)) {
          setSounds(response.data);
        } else {
          setError('Invalid response data');
        }
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const playSound = (soundUrl, id) => {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }

    if (playingSoundId === id) {
      setPlayingSoundId(null);
      return;
    }

    const audio = new Audio(soundUrl);
    audio.volume = 0.05;
    audio.loop = true;
    audio.play();
    setCurrentSound(audio);
    setPlayingSoundId(id);
  };

  const handleButtonClick = (soundUrl, id) => {
    playSound(soundUrl, id);
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="meditation-sounds-container">
      <h2 className="meditation-sounds-title">Meditation Sounds</h2>
      <div className="button-container">
        {sounds.slice(0, 3).map((sound) => (
          <button
            key={sound.id}
            className={`sound-button sound-button-${sound.id}`}
            onClick={() => handleButtonClick(sound.soundUrl, sound.id)}
          >
            {playingSoundId === sound.id ? 'Pause' : sound.soundName}
          </button>
        ))}
      </div>
      <div className="button-container">
        {sounds.slice(3, 6).map((sound) => (
          <button
            key={sound.id}
            className={`sound-button sound-button-${sound.id}`}
            onClick={() => handleButtonClick(sound.soundUrl, sound.id)}
          >
            {playingSoundId === sound.id ? 'Pause' : sound.soundName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MeditationSounds;