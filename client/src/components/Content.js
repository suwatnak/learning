import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Home, Categories, Articles } from './'
import { Sidebar } from '../containers'

const Content = () => (
  <div>
    <Sidebar />
    <Route exact path='/' component={Home} />
    <Route path='/categories' component={Categories} />
    <Route path='/articles' component={Articles} />
  </div>
)

export default Content