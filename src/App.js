import logo from './logo.svg';
import React, { useState } from 'react';
import './styles/App.css';
import Social from './Social'
import Button from '@material-ui/core/Button';

import github from './icons/github.svg'
import twitter from './icons/twitter.svg'
import hackclub from './icons/hackclub.svg'
import youtube from './icons/youtube.svg'
import discord from './icons/discord.svg'

const currAge = new Date().getFullYear() - 2007; //determine age, where 2007 is the year of birth


const whoIAm = 
  <div id="Info" class="anim">
    <p>I am a {currAge} year-old student, born and raised in Greece.</p>
    <p> I always liked  computers and loved learning about new technologies and playing around with both software and hardware.</p>
    <p> I'm a member of the <a href="https://hackropolis.club" className="App-link">Hackropolis</a> club, part of <a href="https://hackclub.com" className="App-link">Hack Club</a>, a nonprofit network of high school coding clubs and makers around the world.</p>
  </div>;

const whatIDo = 
  <div id="Info" class="anim">
    <p>I enjoy coding and learning new languages and tools on every new project.</p>
    <p>I don't have a preferred language but I've tried several in projects such as games with Unity and C#, websites with ReactJS, scripts with Python and Discord bots with JavaScript.</p>
    <p>I also like hardware design, playing with microcontrollers and designing circuit boards with KiCad.</p>
  </div>;

const contactMe = 
  <div id="Info" class="anim" style={{textAlign: "center"}}>
    <div className="buttonArray">
      <Social img={discord}  alt="Join my Discord Server (or find me as Devnol#9366)" href="https://discord.gg/MXZKx7de6M"/>
      <Social img={github}  alt="Follow me on Github" href="https://github.com/Devnol"/>
      <Social img={twitter} alt="Follow me on Twitter" href="https://twitter.com/PanosDevnol"/>
      <Social img={hackclub}  alt="Check out my HackClub Scrapbook" href="https://scrapbook.hackclub.com/Devnol"/>
      <Social img={youtube}  alt="Subscribe to my YouTube channel for occasional streams" href="https://www.youtube.com/channel/UClmSnMrllvKpiZQ79XmqznQ"/>
    </div>
  </div>;

function App() {
  const [info, changeInfo] = useState(<div id="Info" class="anim"></div>);
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
        {/* TODO: Add a scroll prompt */}
        <div class="scroll-prompt"><b id="scrollText">Scroll down</b></div>
    </div>
  );
}

export default App;
