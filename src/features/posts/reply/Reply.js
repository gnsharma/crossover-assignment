import React from "react";
import { useDispatch } from "react-redux";

import Form from "../form/Form";
import styles from "./Reply.module.css";

import { replyToReply } from "../postsSlice";

export default function Reply({ reply, replyIndex, postIndex }) {
  const dispatch = useDispatch();

  const getRepliesRender = () => {
    if (!reply.replies) return null;
    if (!reply.replies.length) return null;

    return (
      <ul>
        {reply.replies.map((reply, index) => (
          <li key={index}>
            <Reply reply={reply} postIndex={postIndex} replyIndex={index} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className={styles.name}>{reply.name}</div>
      <div className={styles.text}>{reply.text}</div>

      {reply.replies && (
        <div className={styles.form}>
          <Form
            onSubmit={(reply) =>
              dispatch(replyToReply(postIndex, replyIndex, reply))
            }
            submitText='Reply'
          />{" "}
        </div>
      )}

      {getRepliesRender()}
    </>
  );
}
