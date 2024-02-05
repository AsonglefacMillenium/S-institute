import React from "react";
import styles from "./EventContainer.module.css";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

const EventContainer = () => {
  return (
    <Link to="" className={`${styles.eventContainer}`}>
      <div className={`${styles.eventType}`}>
        <p>Online event</p>
      </div>
      <h1>
        St. Louis Virtual info session for Internationals | Virtual info session
      </h1>
      <h4>10.09.2022</h4>

      <p className={`${styles.eventContainerBody}`}>
        Join our online events and get to know our university. Learn more about
        our study programmes, get personal advice and experience lectures. Feel
        free to have a look!
      </p>

      <div className={`${styles.eventContainerMap}`}>
        <BiMap />
        <p>Online</p>
      </div>
    </Link>
  );
};

export default EventContainer;
