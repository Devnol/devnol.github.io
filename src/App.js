import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
const currAge = new Date().getFullYear() - 2007; //determine age, where 2007 is the year of births

const whoIAm = 
  <div id="Info" class="anim">
    <p>I am a {currAge} year old student, born and raised in Greece.</p>
    <p> I always liked  computers and loved learning about new technologies and playing around with both software and hardware.</p>
    <p> I'm a member of the <a href="https://hackropolis.club" className="App-link">Hackropolis</a> club, part of <a href="https://hackclub.com" className="App-link">Hack Club</a>, a nonprofit network of high school coding clubs and makers around the world.</p>
  </div>;

const whatIDo = 
  <div id="Info" class="anim">
    <p>I enjoy coding and learning new languages and tools on every new project.</p>
    <p>I don't have a preferred language but I've tried several in projects such as games with Unity and C#, websites with React, scripts with Python and Discord bots in JavaScript</p>
    <p>I also like hardware engineering, playing with Arduinos and Raspberry Pis and designing Circuit Boards with KiCad</p>
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
