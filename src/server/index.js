import express from 'express'
import configureApp from '../utils/configureApp'
import devServer from './dev'
import routes from './routes'

const app = configureApp()(express())

if (app.get('development')) {
  app
    .configure(devServer())
}

app
  .configure(routes())

export default app
