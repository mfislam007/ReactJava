import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent';
import SecondComponent from './Components/SecondComponent';
import Counter from './Components/Counter';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload. Hello React
          </p>
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
        </header>
        <Counter />
      </div>
    );
  }
}

export default App;
