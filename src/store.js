import { compose, createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import config from './config'
// import { setSettings } from './actions/contactActions'
// import { setSettings } from './actions/menuActions'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
let rootStore

function getStoreHistoryApi() {
  return browserHistory
}

export function createRootStore(config) {
  const historyApi = getStoreHistoryApi()

  rootStore = createStore(
    reducer,
    undefined,
    compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(historyApi)
      ),
      (config.env !== 'production' &&
        typeof window !== 'undefined' &&
        window.devToolsExtension ?
        window.devToolsExtension() :
        f => f),
      autoRehydrate()
    )
  )

  sagaMiddleware.run(sagas)

  const history = syncHistoryWithStore(historyApi, rootStore, {
    adjustUrlOnReplay: false,
  })

  rootStore.getHistory = () => history

  return rootStore
}

export default function getRootStore() {
  return rootStore
}

createRootStore({ env: process.env.NODE_ENV })
