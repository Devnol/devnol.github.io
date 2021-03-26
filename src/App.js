import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Hello 👋 I am Panos,
        </h3>
        <h4>
          But you can call me Devnol
        </h4>
      </body>
      <footer>
      <p className="Webring-text">Proud Member of the Zoomer Hacking webring</p>
      <p className="Webring-text">
      <a
          className="Webring-link"
          href="https://stephenvk.xyz"
          target="_blank"
          rel="noopener noreferrer"
          >
           ⬅️ Prev
        </a>&nbsp;|&nbsp;
        <a
          className="Webring-link"
          href="https://stephenvk.xyz/ring/"
          target="_blank"
          rel="noopener noreferrer"
          >
          All
        </a>&nbsp;|&nbsp; 
        <a
          className="Webring-link"
          href="https://stephenvk.xyz/ring/"
          target="_blank"
          rel="noopener noreferrer"
          >
          Next ➡️
        </a> 
      </p>
      </footer>
    </div>
  );
}

export default App;
