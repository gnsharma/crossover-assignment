import React from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import PostsList from "./features/posts/PostsList";
import Form from "./features/posts/form/Form";

import { addPost } from "./features/posts/postsSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <div className='app-form'>
        <Form onSubmit={(post) => dispatch(addPost(post))} submitText='Post' />
      </div>
      <PostsList />
    </>
  );
}

export default App;
