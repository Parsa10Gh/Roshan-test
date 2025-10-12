import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exit: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeExit: (state) => { state.exit = !state.exit },
  },
});

export const { changeExit } = homeSlice.actions;
export default homeSlice.reducer;
