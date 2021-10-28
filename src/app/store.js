import { configureStore } from '@reduxjs/toolkit';
import Moviered from '../features/Movies/movieSlicer';
import userRed from '../features/user/userSlice';
export const store = configureStore({
  reducer: {
    movie: Moviered,
    user:userRed

  },
});
