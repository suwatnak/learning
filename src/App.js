import React, { Component } from 'react';

class App extends Component {
  state = {
    notes: [
      "note@1",
      "note@2",
      "note@3",
    ]
  }

  componentDidMount() {
    this.noteInput.focus()
  }

  addNote = (e) => {
    if (e.key ==='Enter') {
      this.setState({notes: [...this.state.notes, e.target.value]},
        ()=> { 
          this.noteInput.value = ''
        }
    )
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
        <input type="text" 
        onKeyUp={this.addNote}
        ref={input => this.noteInput = input}/>
      </div>
    )
  }
}

export default App;