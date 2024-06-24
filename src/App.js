import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FocusSession from './components/FocusSession';
import MindfulnessExercises from './components/MindfulnessExercises';
import ProgressTracking from './components/MeditationSounds';
import './App.css'; 

const App = () => (
  <Router>
    <div className="app-container">
      <h1 className="site-title animate-title">MindZen</h1>
      <div className="nav-options animate-buttons">
        <Link to="/focus-sessions" className="nav-link">Foc Sessions</Link>
        <Link to="/mindfulness-exercises" className="nav-link">Mindfulness Exercises</Link>
        <Link to="/progress-tracking" className="nav-link">MeditationSounds</Link>
      </div>
      <Routes>
        <Route path="/focus-sessions" element={<FocusSession />} />
        <Route path="/mindfulness-exercises" element={<MindfulnessExercises />} />
        <Route path="/progress-tracking" element={<ProgressTracking />} />
      </Routes>
    </div>
  </Router>
);

export default App;
