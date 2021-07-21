import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Ring from './Ring';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <footer>
      <Ring prevLink="https://akisblack.tech" nextLink="https://stephenvk.xyz"/>
      <p className="ossNotice">
        Made by Devnol with ❤️, ReactJS and GitHub pages. This site is open source, <a href="https://github.com/Devnol/devnol.github.io/" className="App-link">help improve it on GitHub</a>
      </p>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
