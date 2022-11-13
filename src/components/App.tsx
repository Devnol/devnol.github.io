import logo from '../assets/logo.svg';
import { useState } from 'react';
import '../styles/App.css';
import Social from './Social'
import Button from '@mui/material/Button';

import github from '../assets/icons/github.svg'
import twitter from '../assets/icons/twitter.svg'
import youtube from '../assets/icons/youtube.svg'
import discord from '../assets/icons/discord.svg'
import matrix from '../assets/icons/matrix.svg'

const currAge = new Date().getFullYear() - 2007; //determine age, where 2007 is the year of birth


const whoIAm = 
  <div id="Info" className="anim">
    <p>I am a {currAge} year-old student, born and raised in Greece.</p>
    <p>I've always loved toying about with anything electromechanical, learning about new technologies and making stuff with my hands, ranging from building LEGO sets to repairing electronics.</p>
    <p>I also enjoy playing videogames, especially old Nintendo titles, playing the guitar and travelling around the world.</p>
  </div>;

const whatIDo = 
  <div id="Info" className="anim">
    <p>I enjoy coding and learning new languages and tools on every new project.</p>
    <p>I don't have a preferred language but I've tried several in projects such as games with Unity and C#, websites with ReactJS, Wii Homebrew, Arduino/RP2040 projects with C/C++ and Discord bots with JavaScript.</p>
    <p>I also like hardware design, playing with microcontrollers and designing circuit boards with KiCad.</p>
  </div>;

const contactMe = 
  <div id="Info" className="anim" style={{textAlign: "center"}}>
    <div className="buttonArray">
      <Social img={discord}  alt="Join my Discord Server (or find me as Devnol#9366)" href="https://discord.gg/MXZKx7de6M"/>
      <Social img={matrix}  alt="Find me on the Matrix universe" href="https://matrix.to/#/@devnol:projectsegfau.lt"/>
      <Social img={github}  alt="Follow me on Github" href="https://github.com/Devnol"/>
      <Social img={twitter} alt="Follow me on Twitter" href="https://twitter.com/PanosDevnol"/>
      <Social img={youtube}  alt="Subscribe to my YouTube channel for occasional streams" href="https://www.youtube.com/channel/UClmSnMrllvKpiZQ79XmqznQ"/>
    </div>
  </div>;

function App() {
  const [info, changeInfo] = useState(<div id="Info" className="anim"></div>);
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Hello 👋 I am Panos,
        </h3>
        <h4>
          But you can call me Devnol
        </h4>
        <div className="buttonArray">
          <Button variant="contained" onClick={() => {changeInfo(whoIAm);document.getElementById("Info").classList.remove("anim");setTimeout(() => {
             document.getElementById("Info").classList.add("anim");
          }, 100);}}> Who I am </Button>
          <Button variant="contained" onClick={() => {changeInfo(whatIDo);document.getElementById("Info").classList.remove("anim");setTimeout(() => {
             document.getElementById("Info").classList.add("anim");
          }, 100);}}> What I do </Button>
          <Button variant="contained" onClick={() => {changeInfo(contactMe);document.getElementById("Info").classList.remove("anim");setTimeout(() => {
             document.getElementById("Info").classList.add("anim");
          }, 100);}}> Contact Me </Button>
        </div>
        {info}
        <div className="scroll-prompt"></div>
    </div>
  );
}

export default App;
