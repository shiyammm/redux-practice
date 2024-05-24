import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
    deleteUser: (state, action) => {
      const deleteIndex = action.payload;
      return state.filter((val, index) => index !== deleteIndex);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
