import React, { useState } from 'react';
import './MeditationSounds.css';

const MeditationSounds = () => {
  const initialSounds = [
    { id: 1, soundName: "WATER", soundUrl: "https://oddwiring.com/archive/websites/mndev/resources/sounds/Boiling%20and%20Bubbling/de_leau_sur_le_feu.wav" },
    { id: 2, soundName: "THUNDER", soundUrl: "https://www.wetterklima.de/seminar/blitz/blitz_mittelweit.wav" },
    { id: 3, soundName: "WIND", soundUrl: "https://cd.textfiles.com/cdaction/cdaction27a/FIFTH/WAV/_WIND2.WAV" },
    { id: 4, soundName: "ANIMALS", soundUrl: "https://cd.textfiles.com/10000gp2/500SNDS/9_38.WAV" },
    { id: 5, soundName: "FIRE", soundUrl: "https://gamekill.cz/cstrike/sound/brn.wav" },
    { id: 6, soundName: "DROPLETS", soundUrl: "https://www.pachd.com/sfx/water_drops2.wav" }
  ];

  const [currentSound, setCurrentSound] = useState(null);
  const [playingSoundId, setPlayingSoundId] = useState(null);

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
    audio.play()
      .then(() => {
        setCurrentSound(audio);
        setPlayingSoundId(id);
      })
      .catch(error => {
        console.error('Failed to play audio:', error);
        // Handle or log the error
      });
  };

  const firstRow = initialSounds.slice(0, 3);
  const secondRow = initialSounds.slice(3, 6);

  const handleButtonClick = (soundUrl, id) => {
    playSound(soundUrl, id);
  };

  return (
    <div className="meditation-sounds-container">
      <h2 className="meditation-sounds-title">Meditation Sounds</h2>
      <div className="button-container">
        {firstRow.map((sound) => (
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
        {secondRow.map((sound) => (
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