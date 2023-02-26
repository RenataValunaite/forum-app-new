import React from "react";
import styles from "./event.module.css";
import Router from "next/router";

type EventType = {
  question: string;
  answer: string;
  likes: number;
  dislikes: number;
  time: string;
  id: string;
};

const Event: React.FC<EventType> = ({
  question,
  answer,
  likes,
  dislikes,
  time,
  id,
}) => {
  const onClickHandler = () => {
    Router.push(`/event/${id}`);

    console.log(id);
  };

  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.content}>
        <h5 className={styles.info}>{question}</h5>
        <h5 className={styles.info}>{answer}</h5>
        <h5 className={styles.info}>{likes}</h5>
        <h5 className={styles.info}>{dislikes}</h5>
        <h5 className={styles.info}>{time}</h5>
      </div>
    </div>
  );
};

export default Event;
