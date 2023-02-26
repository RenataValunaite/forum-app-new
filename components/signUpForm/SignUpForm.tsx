import React, { useState } from "react";
import Router from "next/router";
import styles from "./signUpForm.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import axios from "axios";

const SignUpForm: React.FC = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onClickHandler = () => {
    console.log(email, password, name);

    const signUpData = {
      name: name,
      email: email,
      password: password,
    };

    axios.post("", signUpData);
    Router.push("/");
  };

  return (
    <div className={styles.main}>
      <Input onChange={name} value={name} placeholder="Name" />
      <Input onChange={email} value={email} placeholder="Email" />
      <Input onChange={password} value={password} placeholder="Password" />
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Sign Up" />
      </div>
    </div>
  );
};

export default SignUpForm;
