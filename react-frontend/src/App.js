import React, { Component } from 'react';
import './App.css';
import Admin from './Admin'

class App extends Component {
  state = {admin: 'Bana'}
  render() {
    return (
      <div className="App">
        <Admin />
      </div>
    );
  }
}

export default App;
