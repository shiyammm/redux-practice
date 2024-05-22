import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/slice';

const store = configureStore({
  reducer: {
    usersInfo: userReducer,
  },
});

export default store;
