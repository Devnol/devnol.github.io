import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Project from './Projects'
import reportWebVitals from './reportWebVitals';

import QuboRun from "./icons/QuboRun.png";
import GeometrySlash from "./icons/GeometrySlash.png";

const projects =  {
  "QuboRun": {
    "name": "QuboRun",
    "description": "A cube running endlessly, trying to avoid obstacles.",
    "lang": "C#, Mono, .NET, Unity",
    "url": "https://github.com/Devnol/QuboRun",
    "icon": QuboRun
  },
  "GeometrySlash": {
    "name": "GeometrySlash",
    "description": "A simple matching game I made along with Peter0x44.",
    "lang": "C++, raylib",
    "url": "https://github.com/Peter0x44/GeometrySlash",
    "icon": GeometrySlash
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Project project={projects.QuboRun}/>
    <Project project={projects.GeometrySlash}/>
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
