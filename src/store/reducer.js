import { createSlice } from '@reduxjs/toolkit'

export const fileSlice = createSlice({
  name: 'files',
  initialState: {
    files: [],
  },
  reducers: {
    setFiles: (state, action) => {
        state.value = action.payload;
    }
  }
})

export const {setFiles} = fileSlice.actions

export default fileSlice.reducer