import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exit: false,
  url: "",
  result: null,
  timedText: null,
  isText: true,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeExit: (state) => { state.exit = !state.exit },
    setUrl: (state,action) => {state.url = action.payload},
    setResult: (state,action) => {state.result = action.payload},
    setTimedText: (state , action) => { state.timedText = action.payload},
    changeIsText: (state , action) => { state.isText = action.payload },
  },
});

export const { changeExit , setUrl , setResult , setTimedText , changeIsText } = homeSlice.actions;
export default homeSlice.reducer;
