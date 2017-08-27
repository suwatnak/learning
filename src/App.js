import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    noets: ["note"]
  }
  render() {
    return (
      <div className="App">
        {this.state.noets.length > 0 &&<p>You have notes </p>}
      </div>
    );
  }
}

export default App;
