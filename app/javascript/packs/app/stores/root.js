import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {
  createStore,
  applyMiddleware
} from 'redux'
import {structure} from "./structure"

const middleware = applyMiddleware(thunk, createLogger());
export const store = createStore(structure, middleware)
