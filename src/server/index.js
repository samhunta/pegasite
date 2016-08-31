import express from 'express'
import configureApp from '../utils/configureApp'
import devServer from './dev'
import routes from './routes'
import { resolve } from 'path'

const app = configureApp()(express())

if (app.get('development')) {
  app
    .configure(devServer())
} else {
  app
    .use('/', express.static(resolve(__dirname, '../../dist')))
}


app
  .configure(routes())

export default app
