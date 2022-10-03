import { configureStore } from '@reduxjs/toolkit'
import fileSlice from './reducer'

export default configureStore({
  reducer: {
    files: fileSlice,
  },
})