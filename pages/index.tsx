import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Event from "../components/event/Event";
import NavBar from "../components/navBar/NavBar";
import Button from "../components/button/Button";
import Router from "next/router";

export default function Home(props: any) {
  const [events, setEvents] = useState<any>(props.events);

  const [filter, setFilter] = useState<any>("");

  const onChangeFilterInputHander = (eventValue: any) => {
    setFilter(eventValue);
  };

  return (
    <div className={styles.container}>
      <NavBar title={""} />

      <div className={styles.buttonWrapper}>
        <Button
          onClick={() => Router.push("/askQuestion")}
          text="Ask Question"
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          value={filter}
          onChange={(event) => onChangeFilterInputHander(event.target.value)}
        />
      </div>

      <div className={styles.eventWrapper}>
        {events
          .filter((event: any) => event.id.includes(filter))
          .map((event: any) => {
            return (
              <Event
                id={event._id}
                question={event.question}
                answer={event.answer}
                likes={event.likes}
                dislikes={event.dislikes}
                time={event.time}
              />
            );
          })}
      </div>
    </div>
  );
}

export async function getServerSideProps(contex: any) {
  console.log("contex", contex);

  const response = await axios.get("http://localhost:3001/");

  return {
    props: {
      events: response.data.event,
    },
  };
}
