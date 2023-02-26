import React, { useState } from "react";
import Router from "next/router";
import styles from "./questionForm.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import axios from "axios";

const QuestionForm: React.FC = () => {
  const [question, setQuestion] = useState();
  const [description, setDescription] = useState();

  const onClickHandler = () => {
    console.log(question, description);

    const questionData = {
      question: question,
      description: description,
    };

    axios.post("", questionData);
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input onChange={question} value={question} placeholder="Question" />
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

export default QuestionForm;
