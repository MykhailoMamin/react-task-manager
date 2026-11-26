import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  search: '',
  status: 'all',
  priority: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
    changePriority(state, action) {
      state.priority = action.payload;
    },
  },
});

export const { changeSearch, changeStatus, changePriority } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
