// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends React.Component {
  render () {
    return (
      <Application />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
