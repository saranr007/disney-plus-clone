import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import red from '../features/Movies/movieSlicer';
export const store = configureStore({
  reducer: {
    movie: red,
  },
});
