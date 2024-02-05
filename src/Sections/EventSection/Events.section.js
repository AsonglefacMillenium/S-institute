import React from "react";
import { Link } from "react-router-dom";
import { Button, EventContainer } from "../../Components";
import styles from "./Events.module.css";

const Events = () => {
  return (
    <div className={`${styles.events}`}>
      <div className={`${styles.onlineEvents}`}>
        <h3>Join our Onsite Events</h3>
        <div className={`${styles.onlineHeader}`}>
          <h1>Onsite and Campus events</h1>

          <div className={`${styles.onlineText}`}>
            <p>
              Join our online events and get to know our university. Learn more
              about our study programmes, get personal advice and experience
              lectures. Feel free to have a look!
            </p>
            <Button buttonText="All Events" />
          </div>
        </div>

        <div className={`${styles.eventsMain}`}>
          <EventContainer />
          <EventContainer />
          <EventContainer />
        </div>

        <Link to="/more-event" className={`${styles.moreEvents}`}>
          More Events
        </Link>
      </div>

     
    </div>
  );
};

export default Events;