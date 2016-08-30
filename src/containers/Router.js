import React from 'react'
import { Router as ReactRouter, browserHistory } from 'react-router'
import routes from '../routes'

export default () => (
  <ReactRouter history={browserHistory}>
    {routes()}
  </ReactRouter>
)
