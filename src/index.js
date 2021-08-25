import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Project from './Projects'
import reportWebVitals from './reportWebVitals';

import projects from './Projlist'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Project project={projects.QuboRun}/>
    <Project project={projects.GeometrySlash}/>
    <Project project={projects.SR74HC595Pico}/>
    <footer>
      <p className="ossNotice">
        Made by Devnol with ❤️, ReactJS and GitHub Pages.
        <br></br>This site is open source, <a href="https://github.com/Devnol/devnol.github.io/" className="App-link">help improve it on GitHub</a>
      </p>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
