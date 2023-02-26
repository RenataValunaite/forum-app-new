import React, { useState } from "react";
import Router from "next/router";
import styles from "./logInForm.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import axios from "axios";

const LogInForm: React.FC = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = () => {
    console.log(email, password);

    const logInData = {
      email: email,
      password: password,
    };

    axios.post("", logInData);
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input onChange={email} value={email} placeholder="Email" />
      <Input onChange={password} value={password} placeholder="Password" />
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Log In" />
      </div>
    </div>
  );
};

export default LogInForm;
