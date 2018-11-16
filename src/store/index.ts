import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    logger
  )
)

sagaMiddleware.run(mySaga)

export default store
