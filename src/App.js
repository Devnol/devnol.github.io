import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
const YoB = 2007;
const currAge = new Date().getFullYear() - YoB;

const whoIAm = 
  <div id="Info" class="anim">
    <p>I am a {currAge} year old student, born and raised in Greece.</p>
    <p> I always liked  computers and loved learning about new technologies and playing around with both software and hardware.</p>
    <p> I'm a member of the <a href="https://hackropolis.club" className="App-link">Hackropolis</a> club, part of <a href="https://hackclub.com" className="App-link">Hack Club</a>, a nonprofit network of high school coding clubs and makers around the world.</p>
  </div>;

const whatIDo = 
  <div id="Info" class="anim">
    <p>I enjoy coding and learning something new every day.</p>
    <p>In the past, I have created several projects using several technologies such as games with Unity, hardware automations with Raspberry Pi and Arduino and bots for Discord using Discord.js. I don't like staying on one thing for long though so I haven't created any large projects as of now, though I'd love to make something of a larger scale.</p>
    <p>Another thing I like is designing hardware as well as soldering or prototyping circuits.</p>
    <p>I like gaming but I'm pretty bad at it so I don't play games often. When I do however, I prefer retro classics rather than modern triple-A titles because I prefer their art style and simplicity.</p>
  </div>;

const contactMe = 
  <div id="Info" class="anim">
    <a href="https://github.com/Devnol/" className="App-link">My GitHub</a>
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
    </div>
  );
}

export default App;
