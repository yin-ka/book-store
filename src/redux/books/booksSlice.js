import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state) => {
      state.value += 1;
    },
    removeBook: (state) => {
      state.value -= 1;
    },
  },
});

export const { addBook, removeBook } = BookSlice.actions;

export default BookSlice.reducer;
