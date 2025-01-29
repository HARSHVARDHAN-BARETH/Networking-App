import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },

    updatePost: (
      state,
      action: PayloadAction<{ index: number; data: Post }>
    ) => {
      state.posts[action.payload.index] = action.payload.data;
    },

    deletePost: (state, action: PayloadAction<number>) => {
      state.posts.splice(action.payload, 1);
    },
  },
});

export const { addPost, updatePost, deletePost } = PostSlice.actions;
export default PostSlice.reducer;
