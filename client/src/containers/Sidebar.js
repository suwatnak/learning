import React, { Component } from 'react'

class SidebarContainer extends Component {
  componentDidMount() {
    fetch('/categories').then(res => res.json())
    .then(res => console.log(res))
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}