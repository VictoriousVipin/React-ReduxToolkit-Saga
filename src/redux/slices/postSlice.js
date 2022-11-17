import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.value = action.payload;
    },
    updatePost: (state, action) => {
      console.log('ACTION', action);
      state.value = action.payload;
    },
    deletePost: (state, action) => {
      console.log('DELETED_ID', action.payload);
      state.value = state.value.filter((post) => post.id !== action.payload);
    },
  },
});

export const { getPosts, updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;
