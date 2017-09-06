import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SidebarContainer extends Component {
  state = {
    categories: []
  }
  componentDidMount() {
    fetch('http://localhost:8000/categories')
      .then(res => res.json())
      .then(({ categories }) => this.setState({ categories }))
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.categories.map(({ id, title }) =>
              <Link
              key={id}
              to={`/categories/${id}/articles`}
              >{title}</Link>
            )
          }
        </ul>
      </div>
    )
  }
}

export default SidebarContainer