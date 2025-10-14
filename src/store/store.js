import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../slices/homeSlices';
import archiveReducer from '../slices/archiveSlices';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    archive: archiveReducer, 
  },
});
