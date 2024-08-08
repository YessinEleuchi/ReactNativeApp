import { createSlice, } from '@reduxjs/toolkit'

const initialState = {
  value: 'vocab',
}

export const menuTop = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setVocab: (state) => {
      state.value = 'vocab'
    },
    setGram: (state) => {
      state.value = 'gram'
    },
    setExp: (state) => {
      state.value = 'exp'
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGram, setVocab, setExp } = menuTop.actions

export default menuTop.reducer