import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <input type="text" onChange={(e) => { console.log(e.target.value) }} />
    )
  }
}

export default App;