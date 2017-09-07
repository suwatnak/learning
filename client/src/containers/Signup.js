import React, { Component } from 'react';
import { AuthForm } from '../components'

class SignupContainer extends Component {
  handleFormSubmit = credential => {
    fetch(`http://localhost:8000/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credential)
    })
  }
  render() {
    return (
      <AuthForm
        forName='Signup'
        onSubmit={this.handleFormSubmit} />
    )
  }
}

export default SignupContainer;