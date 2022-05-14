import { createSlice } from '@reduxjs/toolkit'

export const listReducer = createSlice({
  name: 'list',
  initialState: {
    value: [],

  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { set } = listReducer.actions

export default listReducer.reducer