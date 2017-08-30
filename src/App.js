import React, { Component } from 'react';
import Form from './Form'
import Contacts from './Contacts'

class App extends Component {
  state = {
    contacts: [
      { name: "suwat nakchukaew", address: '123/456' }
    ]
  }

  render() {
    return (
      <div>
        <Form />
        <hr />
        <Contacts {...this.state} />
      </div>
    )
  }
}

export default App;