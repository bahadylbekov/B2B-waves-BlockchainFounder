// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Application from './components/Application';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends React.Component {
  render () {
    return(
      <BrowserRouter>
      <MuiThemeProvider>
          <Application />
      </MuiThemeProvider>
    </BrowserRouter>  
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
