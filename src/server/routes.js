import express from 'express'
import routes from '../data/routes.json'
import { resolve } from 'path'

export default () => {
  const render = (req, res) => (
    res.sendFile(resolve(__dirname, '../../public/index.html'))
  )

  return function routeConfigure(app) {
    routes.forEach(route => app.use(`/${route}`, render))
  }
}
