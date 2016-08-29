import express from 'express'
import configureApp from '../utils/configureApp'
import devServer from './dev'

const app = configureApp()(express())

if (app.get('development')) {
  devServer(app)
}

export default app
