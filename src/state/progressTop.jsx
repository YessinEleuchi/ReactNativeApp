import { createSlice, } from '@reduxjs/toolkit'

const initialState = {
  value: 'week',
}

export const progressTop = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setWeek: (state) => {
      state.value = 'week'
    },
    setLearn: (state) => {
      state.value = 'learn'
    },
  },
})

// Action creators are generated for each case reducer function
export const { setWeek, setLearn } = progressTop.actions

export default progressTop.reducer