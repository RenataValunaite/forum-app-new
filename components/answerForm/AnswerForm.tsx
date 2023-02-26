import React, { useState } from "react";
import Router from "next/router";
import styles from "./answerForm.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import axios from "axios";

const AnswerForm: React.FC = () => {
  const [answer, setAnswer] = useState();
  const [description, setDescription] = useState();

  const onClickHandler = () => {
    console.log(answer, description);

    const answerData = {
      answer: answer,
      description: description,
    };

    axios.post("", answerData);
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input onChange={answer} value={answer} placeholder="Answer" />
      <Input
        onChange={description}
        value={description}
        placeholder="Description"
      />
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Submit" />
      </div>
    </div>
  );
};

export default AnswerForm;
