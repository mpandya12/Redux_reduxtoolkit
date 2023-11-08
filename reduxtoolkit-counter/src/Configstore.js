import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import todoReducer from './TodoSlice'

export const store = configureStore(
    
    {
    
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  
    devTools: process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
    
  },
  
})