import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Home } from './'
import {Sidebar } from '../containers'

const Content = () => (
  <div>
    <Sidebar></Sidebar>
    <Route path='/' component={Home} />
  </div>
)

export default Content