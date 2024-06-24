import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MeditationSounds.css';

// Import local MP3 files
import thunderSound from './thunder.mp3';
import windSound from './wind.flac';
import animalsSound from './jungle.flac';

const MeditationSounds = () => {
  const [sounds, setSounds] = useState([
    { id: 1, soundName: "WATER", soundUrl: "https://oddwiring.com/archive/websites/mndev/resources/sounds/Boiling%20and%20Bubbling/de_leau_sur_le_feu.wav" },
    { id: 2, soundName: "THUNDER", soundUrl: thunderSound },
    { id: 3, soundName: "WIND", soundUrl: windSound },
    { id: 4, soundName: "ANIMALS", soundUrl: animalsSound },
    { id: 5, soundName: "FIRE", soundUrl: "https://gamekill.cz/cstrike/sound/brn.wav" },
    { id: 6, soundName: "DROPLETS", soundUrl: "https://www.pachd.com/sfx/water_drops2.wav" }
  ]);

  const [currentSound, setCurrentSound] = useState(null);
  const [playingSoundId, setPlayingSoundId] = useState(null);

  useEffect(() => {
    axios.get('/api/meditation-sounds')
      .then(response => {
        if (Array.isArray(response.data)) {
          setSounds(response.data); // Ensure response.data is an array
        } else {
          console.error('Invalid data received:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching meditation sounds:', error);
        // Handle error state or fallback if necessary
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
    audio.volume = 0.05; // Set volume for ASMR-like experience
    audio.loop = true;
    audio.play();
    setCurrentSound(audio);
    setPlayingSoundId(id);
  };

  const handleButtonClick = (soundUrl, id) => {
    playSound(soundUrl, id);
  };

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
