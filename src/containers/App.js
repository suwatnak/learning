import React, { Component } from 'react';
import { Form, Contacts} from '../components'

class App extends Component {
  state = {
    contacts: [
      { name: "suwat nakchukaew", address: '123/456' }
    ]
  }

  createContact = (contact) => {
    this.setState({
      contacts:[...this.state.contacts, contact]
    })
  }

  render() {
    return (
      <div>
        <Form  onSubmit = {this.createContact}/>
        <hr />
        <Contacts {...this.state} />
      </div>
    )
  }
}

export default App;