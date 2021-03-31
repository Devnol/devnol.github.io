import logo from './logo.svg';
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
      <ThemeProvider theme={theme}>
        <div className="buttonArray">
          <Button variant="contained" color="primary"> Who I am </Button>
          <Button variant="contained" color="primary"> What I do </Button>
          <Button variant="contained" color="primary"> Contact Me </Button>
        </div>
      </ThemeProvider>
      </head>
    </div>
  );
}

export default App;
