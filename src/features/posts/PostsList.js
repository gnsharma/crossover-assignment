import React from "react";
import { useSelector } from "react-redux";

import Post from "./post/Post";

export default function PostsList() {
  const posts = useSelector((state) => state.posts);

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <Post post={post} postIndex={index} />
        </li>
      ))}
    </ul>
  );
}
