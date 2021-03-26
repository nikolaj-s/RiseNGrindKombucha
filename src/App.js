
import React from 'react';
import './App.css';
import { About } from './Components/About/About';
import { Footer } from './Components/Footer/Footer';
import { LandingPage } from './Components/LandingPage.js/LandingPage';
import { Nav } from './Components/Nav/Nav';

import "./mobile.css"

function App() {

  const [top, setTop] = React.useState(false)

  React.useEffect(() => {
    window.onscroll = (e) => {
      const splash_screen = document.getElementsByClassName('center-splash-container')[0].getBoundingClientRect()
      
      if (splash_screen.top < 1) {
        setTop(true)
      } else {
        setTop(false)
      }
    } 
  }, [])
  

  return (
    <div className="App">
      <Nav top={top} />
      <LandingPage />
      <About />
      <Footer />
    </div>
  );
}

export default App;
