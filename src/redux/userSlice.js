import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.name = payload;
      state.isLoggedIn = true;
    },
    logout: (state, { payload }) => {
      state.name = '';
      state.isLoggedIn = false;
    },
  },
  selectUser: state => state.name,
});

export const userReducer = slice.reducer;
export const { login, logout } = slice.actions;
export const { selectUser } = slice.selectors;
