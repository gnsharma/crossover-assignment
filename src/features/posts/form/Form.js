import React from "react";
import { useForm } from "react-hook-form";

import styles from "./Form.module.css";

export default function Form({ onSubmit, submitText }) {
  const { register, handleSubmit, errors, reset } = useForm();

  const submitForm = (formData) => {
    onSubmit(formData);
    reset();
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(submitForm)} className={styles.form}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* include validation with required or other standard HTML validation rules */}

      <input
        name='name'
        ref={register({ required: true })}
        placeholder='name'
      />
      {/* errors will return when field validation fails  */}

      {errors.name && <span>Name field is required</span>}

      <input
        name='text'
        ref={register({ required: true })}
        placeholder='text'
        className={styles.inputText}
      />
      {errors.text && <span>Text field is required</span>}

      <button type='submit'>{submitText}</button>
    </form>
  );
}
