import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';



import '../App.css';
import halvor1 from '../images/halvor1.jpg';
import halvor2 from '../images/halvor2.jpg';
import halvor3 from '../images/halvor3.jpg';
import halvor4 from '../images/halvor4.jpg';
import halvor5 from '../images/halvor5.jpg';
import halvor6 from '../images/halvor6.jpg';
import halvor7 from '../images/halvor7.jpg';
import halvor8 from '../images/halvor8.jpg';
import halvor9 from '../images/halvor9.jpg';
import halvor10 from '../images/halvor10.jpg';
import { Link } from 'react-router-dom';

const MainPage = () => {

  const images = [halvor1, halvor2, halvor3, halvor4, halvor5, halvor6, halvor7, halvor8, halvor9, halvor10];

  const [randomImage, setRandomImage] = useState(images[Math.floor(Math.random() * images.length)]);



    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
  return (
    <>
      <div className="App-body">
        <h1>HalvorHub</h1>
          <img src={randomImage} className="App-logo" alt="Halvor" /> {/* Add this line */}
      </div>
    </>
  );
};

export default MainPage;
    ;
