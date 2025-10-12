import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../slices/homeSlices';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
