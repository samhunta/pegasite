import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './store'
import './styles'

const history = store.getHistory()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
