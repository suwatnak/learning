import React, { Component } from 'react';

class App extends Component {
  state = {
    notes: [
      "note@1",
      "note@2",
      "note@3",
      "note@4",
    ]
  }
  render() {
    return(
      <div>
        <ul>
          {
            this.state.notes.map(
              (note, index) => <li key={index}>{note}</li>
            )
          }
        </ul>
        <input type="text" onKeyUp={(e) => e.keyCode===13 && this.setState({notes: [...this.state.notes, e.target.value]})}/>
      </div>
    )
  }
}

export default App;