import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '0',
    name: 'Zuhaib',
  },
  {
    id: '1',
    name: 'Ali',
  },
  {
    id: '2',
    name: 'Shamil',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
