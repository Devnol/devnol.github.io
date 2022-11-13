import React from 'react'
import ReactDOM from 'react-dom/client'
import projects from './components/Projlist'
import './styles/index.css';
import App from './components/App';
import Project from './components/Projects'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Project project={projects.miniRGBii}/>
    <Project project={projects.ProjectSegfault}/>
    <Project project={projects.QuboRun}/>
    <Project project={projects.GeometrySlash}/>
    <Project project={projects.SR74HC595Pico}/>
    <footer>
      <p className="ossNotice">
        Made by Devnol with ❤️, ReactJS and GitHub Pages.
        <br></br>This site is open source, <a href="https://github.com/Devnol/devnol.github.io/" className="App-link">help improve it on GitHub</a>
      </p>
    </footer>
  </React.StrictMode>
)
