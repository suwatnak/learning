import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ArticlesContainer extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    this.loadArticles()
  }

  loadArticles() {
    const { categoryId } = this.props.match.params
    fetch(`http://localhost:8000/articles?categoryId=${categoryId}`)
      .then(res => res.json())
      .then(({ articles }) => this.setState({ articles }))
  }
  render() {
    const { articles } = this.state
    console.log(articles)
    return (
      <ul>
        {
          articles.map(({ id, title }) =>
            <Link
            key={id}
            to={`/articles/${id}`}
            className='nav-link'>{title}</Link>
          )
        }
      </ul>
    )
  }
}

export default ArticlesContainer