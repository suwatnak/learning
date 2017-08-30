import React, { Component } from 'react';

class App extends Component {
  state = {
    notes: [
      "note@1",
      "note@2",
      "note@3",
    ],
    value: ''
  }

  componentDidMount() {
    this.noteInput.focus()
  }

  addNote = (e) => {
    if (e.key ==='Enter') {
      this.setState(
        {
          notes: [...this.state.notes, e.target.value],
          value: ''
        })
    }
  }
  changValue = (e) => {
    this.setState({value: e.target.value})
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
        value={this.state.value}
        onChange={this.changValue}
        onKeyUp={this.addNote}
        ref={input => this.noteInput = input}/>
      </div>
    )
  }
}

export default App;