import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Home, Categories } from './'
import { Sidebar } from '../containers'

const Content = () => (
  <div>
    <Sidebar />
    <Route path='/' component={Home} />
    <Route path='/categories/*' component={Categories} />
  </div>
)

export default Content