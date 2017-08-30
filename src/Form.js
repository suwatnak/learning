import React, { Component } from 'react'

class FormComponet extends Component {
  state = {
    name: '',
    address: ''
  }

  createContact = (e) => {
    e.preventDefault()
    console.log(this.state)

  }
  changeState = state => (e) => (
    this.setState({ [state]: e.target.value })
  )

  render() {
    const { name, address } = this.state
    return (
      <div>
        <h2>Address From</h2>
        <form>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.changeState('name')} />
            <input
              type="text"
              id="address"
              value={address}
              onChange={this.changeState('address')} />
          </div>
          <button
            type="submit"
            onClick={this.createContact}
          >create</button>
        </form>
      </div>
    )
  }
}

export default FormComponet