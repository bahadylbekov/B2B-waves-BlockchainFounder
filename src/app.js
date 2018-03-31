// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Application from './components/Application';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = (props) => (
  <MuiThemeProvider>
      <Application />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'));
