import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MeditationSounds.css';

const MeditationSounds = () => {
  const [sounds, setSounds] = useState([
    { id: 1, soundName: "Sound 1", soundUrl: "https://oddwiring.com/archive/websites/mndev/resources/sounds/Boiling%20and%20Bubbling/de_leau_sur_le_feu.wav" },
    { id: 2, soundName: "Sound 2", soundUrl: "http://www.ringelkater.de/Sounds/2geraeusche_gegenst/donner.wav" }, // Placeholder for other sounds
    { id: 3, soundName: "Sound 3", soundUrl: "http://web.tiscali.it/gherda-wolit/natura/vento.wav" },
    { id: 4, soundName: "Sound 4", soundUrl: "http://www.zimba.kaeregaard.dk/lyd/nightdog.wav" }
  ]);

  useEffect(() => {
    axios.get('/api/meditation-sounds')
      .then(response => setSounds(response.data))
      .catch(error => console.error(error));
  }, []);

  const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl);
    audio.play();
  };

  return (
    <div className="meditation-sounds-container">
      <h2 className="meditation-sounds-title">Meditation Sounds</h2>
      <div className="button-container">
        <button className="sound-button" onClick={() => playSound(sounds[0]?.soundUrl)}>WATER</button>
        <button className="sound-button" onClick={() => playSound(sounds[1]?.soundUrl)}>THUNDER</button>
      </div>
      <div className="button-container">
        <button className="sound-button" onClick={() => playSound(sounds[2]?.soundUrl)}>WIND</button>
        <button className="sound-button" onClick={() => playSound(sounds[3]?.soundUrl)}>ANIMALS</button>
      </div>
    </div>
  );
};

export default MeditationSounds;



