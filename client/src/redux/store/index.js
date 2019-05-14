import { createStore } from 'redux'
import { appReducer } from '../modules/'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(appReducer, composeWithDevTools())
