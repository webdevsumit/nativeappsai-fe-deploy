import { createSlice} from '@reduxjs/toolkit'

const initialState= {
  isLoanding: false,
}

export const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState,
  reducers: {

    setIsLoading: (state, action) => {
      state.isLoanding = action.payload
    },

  },
})

export const { setIsLoading } = navbarSlice.actions;

export default navbarSlice.reducer;