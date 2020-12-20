import React from "react";
import { useDispatch } from "react-redux";

import Reply from "../reply/Reply";
import Form from "../form/Form";
import styles from "./Post.module.css";

import { replyToPost } from "../postsSlice";

export default function Post({ post, postIndex }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.name}>{post.name}</div>
      <div className={styles.text}>{post.text}</div>

      <div className={styles.form}>
        <Form
          onSubmit={(reply) => dispatch(replyToPost(postIndex, reply))}
          submitText='Reply'
        />
      </div>

      <ul>
        {post.replies.map((reply, index) => (
          <li key={index}>
            <Reply reply={reply} replyIndex={index} postIndex={postIndex} />
          </li>
        ))}
      </ul>
    </>
  );
}
