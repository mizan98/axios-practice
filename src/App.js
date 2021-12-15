import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import PersonList from './component/PersonList';
import PersonInput from './component/PersonInput';

class App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PersonInput />
        <PersonList />
      </header>
    </div>
    );
  }
}

export default App;
