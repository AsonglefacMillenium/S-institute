import React from "react";
import { Link } from "react-router-dom";
import styles from "./Lander.module.css";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Lander = ({ landerBg, LanderText }) => {
  return (
    <div
      className={`${styles.lander}`}
      style={{ backgroundImage: `url(${landerBg})` }}
    >
      <div className={`${styles.landerWrapper}`}>
        <Link to="/">
          <HiArrowNarrowLeft className={`${styles.landerIcon}`}/>
          <p>Back</p>
        </Link>

        <h1>{LanderText}</h1>
      </div>
    </div>
  );
};

export default Lander;
