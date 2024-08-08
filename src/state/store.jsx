import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuTop'
import progressReducer from './progressTop'
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    progress: progressReducer,
  },
})