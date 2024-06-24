import React, { useState } from 'react';
import './MeditationSounds.css';

const MeditationSounds = () => {
  const initialSounds = [
    { id: 1, soundName: "WATER", soundUrl: "https://oddwiring.com/archive/websites/mndev/resources/sounds/Boiling%20and%20Bubbling/de_leau_sur_le_feu.wav" },
    { id: 2, soundName: "THUNDER", soundUrl: "http://www.ringelkater.de/Sounds/2geraeusche_gegenst/donner.wav" },
    { id: 3, soundName: "WIND", soundUrl: "http://web.tiscali.it/gherda-wolit/natura/vento.wav" },
    { id: 4, soundName: "ANIMALS", soundUrl: "http://www.zimba.kaeregaard.dk/lyd/nightdog.wav" },
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
    audio.play();
    setCurrentSound(audio);
    setPlayingSoundId(id);
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
