import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function App() {
  return (
    <div className="App">
      <LazyLoadImage
        src={process.env.PUBLIC_URL + 'lagre.jpg'}
        alt="landscape"
        effect="blur"
        width="100%"
        height="100%"
        placeholderSrc={process.env.PUBLIC_URL + 'img.jpg'}
      />
    </div>
  );
}

export default App;
