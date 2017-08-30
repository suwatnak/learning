import React, { Component } from 'react'

class FormComponet extends Component {
  render() {
    return(
      <div>
        <h2>Address From</h2>
        <form>
          <div>
            <input type="text" id="name" />
            <input type="text" id="address" />
          </div>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
}

export default FormComponet