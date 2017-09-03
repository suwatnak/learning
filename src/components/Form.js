import React, { Component } from 'react'

class FormComponet extends Component {
  state = {
    name: '',
    address: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, address } = this.state
    this.props.onSubmit({
      name,
      address
    })
  this.clearForm()
  }
  changeState = state => (e) => (
    this.setState({ [state]: e.target.value })
  )

  clearForm = () => {
    this.setState({name:'',address:''})
  }
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
            onClick={this.handleSubmit}
          >create</button>
        </form>
      </div>
    )
  }
}

export default FormComponet