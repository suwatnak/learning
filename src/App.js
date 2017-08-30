import React, { Component } from 'react';

class App extends Component {
  state = {
    notes: [
      "note@1",
      "note@2",
      "note@3",
    ]
  }

  addNote = (e) => {
    if (e.key ==='Enter') {
      this.setState({notes: [...this.state.notes, e.target.value]})
    }
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
        <input type="text" onKeyUp={this.addNote}/>
      </div>
    )
  }
}

export default App;