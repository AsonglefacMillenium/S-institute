import React from "react";
import { Link } from "react-router-dom";
import { UnibuddyImage } from "../../resources";
import styles from "./Unibuddy.module.css";

const Unibuddy = () => {
  return (
    <div
      className={`${styles.unibuddy}`}
      style={{ backgroundImage: `url(${UnibuddyImage})` }}
    >
      <div className={`${styles.unibuddyWrapper}`}>
        <h3>FIND YOUR SLUI BUDDY</h3>
        <h1>Chat with our Staff and Students</h1>
        <p>
          Do you want first-hand information? Our staff &amp; students are happy
          to share their experiences with you, tell you about their courses,
          their projects and student life in Douala, Yaounde, Bamenda &amp; Ndu.
        </p>
        <Link to="">
          <button className={`${styles.unibuddyButton}`}>
            Find Your Sluibuddy
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Unibuddy;
