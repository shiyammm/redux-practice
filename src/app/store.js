import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/slice';

const store = configureStore({
  devTools: false,
  reducer: {
    usersInfo: usersReducer,
  },
});

export default store;
