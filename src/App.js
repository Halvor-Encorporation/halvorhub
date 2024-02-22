// App.js


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import MainPage from './pages/MainPage.js';
import Drage from './pages/Drage.js';
import Surf from './pages/Surf.js';
import Fekte from './pages/Fekte.js';
import Crime from './pages/Crime.js';
import Navbar from './components/Navbar';
import Questions from './pages/Questions';
import SpinWheel from './pages/SpinWheel.js';
import ReactGA from 'react-ga';

ReactGA.initialize('G-SERJ5DC5CW');

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/drage" element={<Drage />} />
        <Route path="/surf" element={<Surf />} />
        <Route path="/fekte" element={<Fekte />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/spinwheel" element={<SpinWheel />} />
      </Routes>
    </Router>
  );
};

export default App;


