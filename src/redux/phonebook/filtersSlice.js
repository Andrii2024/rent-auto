import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload.toLowerCase();
    },
  },
  selectors: {
    selectFilter: state => state.filter,
  },
});
export const { selectFilter } = filtersSlice.selectors;
export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
