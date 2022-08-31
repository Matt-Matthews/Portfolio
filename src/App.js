import './App.css';
import Bio from './components/Bio';
import NavBar from './components/NavBar';
import ScrollIndicator from './components/ScrollIndicator';
import SideNav from './components/SideNav';
import Skill from './components/Skills';
import Socials from './components/Socials';
import React from 'react';

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  return (
    <div className="App">
      <div id='home' className='Container'>
      <NavBar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <div className='row-container'>
          <Socials />
          <Bio />
          <div className='skill-list'>
            <div className='first-Col'>

            <Skill text="Dart" />
            <div className='cplus'>
            <Skill text="C++" />
            </div>
            <div className='sizedBox' />
            <Skill text="CSS" />
            </div>
            <div className='sec-Col'>

            <Skill text="Flutter" />
            <Skill text="UI & UX design" />
            <Skill text="SQL" />
            <Skill text="HTML" />
            </div>
            <div className='last-col'>

            <Skill text="React Js" />
            <Skill text="React Native" />
            <Skill text="JavaScript" />
            </div>
          </div>
          <SideNav selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
          {selectedIndex===0 &&<ScrollIndicator />}
        </div>
      </div>
      <div id='projects' className='Container'>
        <div className='heading'>
          <h3>Projects</h3>
          <div className='underline'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
