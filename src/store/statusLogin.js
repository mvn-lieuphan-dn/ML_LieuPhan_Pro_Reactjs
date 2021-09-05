import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('user') ? true : false,
}
export const statusLogin = createSlice({
  name: 'isLogined',
  initialState,
  reducers: {
    toggleLogin: (state, value) => {
      state.value = value.payload;
    }
  },
});

export const { toggleLogin } = statusLogin.actions

export default statusLogin.reducer;
