import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00d4aa"
    }
  },
});


function App() {
  const info = {
    whoIAm: <p> I am panos </p>,
    whatIDo: <p> I do devlop </p>,
    contactMe: <p> No dont </p>,
  }
  const [infoContent, changeInfo] = useState();

  return (
    <div className="App">
      <head className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Hello 👋 I am Panos,
        </h3>
        <h4>
          But you can call me Devnol
        </h4>
        <div className="buttonArray">
          <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" onClick={() => changeInfo(info.whoIAm)}> Who I am </Button>
          <Button variant="contained" color="primary" onClick={() => changeInfo(info.whatIDo)}> What I do </Button>
          <Button variant="contained" color="primary" onClick={() => changeInfo(info.contactMe)}> Contact Me </Button>
          </ThemeProvider>
        </div>
        <div className="info">
          {infoContent}
        </div>
      </head>
    </div>
  );
}

export default App;
