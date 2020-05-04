import { createStore, applyMiddleware } from 'redux'
import { appReducer } from '../modules/'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
)