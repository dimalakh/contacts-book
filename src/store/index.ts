import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [ sagaMiddleware ]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger as any)
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(mySaga)

export default store
