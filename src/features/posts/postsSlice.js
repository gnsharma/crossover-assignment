import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push({ ...action.payload.post, replies: [] });
      },
      prepare: (post) => ({ payload: { post } }),
    },

    replyToPost: {
      reducer: (state, action) => {
        const { postIndex, reply } = action.payload;
        state[postIndex].replies.push({ ...reply, replies: [] });
      },
      prepare: (postIndex, reply) => ({ payload: { reply, postIndex } }),
    },

    replyToReply: {
      reducer: (state, action) => {
        const { postIndex, replyIndex, reply } = action.payload;
        state[postIndex].replies[replyIndex].replies.push(reply);
      },
      prepare: (postIndex, replyIndex, reply) => ({
        payload: { reply, postIndex, replyIndex },
      }),
    },
  },
});

export const { addPost, replyToPost, replyToReply } = postsSlice.actions;

export default postsSlice.reducer;
