import { configureStore } from '@reduxjs/toolkit'
import listReducer from './listReducer'
import inCartReducer from './inCartReducer'

export default configureStore({
  reducer: {
    list: listReducer,
    inCart: inCartReducer,
  }
})