import React from 'react';
import logo from './logo.svg';

import classes from'./App.module.css';
import Topbar from './Topbar/Topbar';
import LandingSection from './LandingSection/LandingSection';
import SubSection from './SubSectionlanding/Sub';




function App() {
  return (
    <div className="App">
  
    <Topbar/>
    <LandingSection/>
    <SubSection/>
    </div>
  );
}

export default App;
