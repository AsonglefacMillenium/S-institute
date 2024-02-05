import React from "react";
import {  HealthSciencePracTwo} from "../../resources";
import styles from "./Landing.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className={`${styles.landing}`}
      style={{ backgroundImage: `url(${HealthSciencePracTwo})` }}
    >
      <div className={`${styles.landingWrapper}`}>
        <div className={`${styles.landingHeaders}`}>
          <p>St. Louis University Institute</p>

          <h1>Character and Excellence. </h1>
        </div>
      </div>
      <div className={`${styles.landingProgram}`}>
        <Link to="/hnd" className={`${styles.courses}`}>
          <div className={`${styles.coursesHeader}`}>
            <h3>HND</h3>
            <p className={`${styles.coursesDetail}`}>18 Study Programmes</p>
          </div>
          <HiOutlineArrowNarrowRight />
        </Link>
        <div className={`${styles.programLine}`}></div>
        <Link to="/bachelors" className={`${styles.courses}`}>
          <div className={`${styles.coursesHeader}`}>
            <h3>Bachelor</h3>
            <p className={`${styles.coursesDetail}`}>9 Study Programmes</p>
          </div>
          <HiOutlineArrowNarrowRight />
        </Link>
        <div className={`${styles.programLine}`}></div>
        <Link to="/masters" className={`${styles.courses}`}>
          <div className={`${styles.coursesHeader}`}>
            <h3>Master</h3>
            <p className={`${styles.coursesDetail}`}>9 Study Programmes</p>
          </div>
          <HiOutlineArrowNarrowRight />
        </Link>
        <div className={`${styles.programLine}`}></div>
        <Link to="/foundation" className={`${styles.courses}`}>
          <div className={`${styles.coursesHeader}`}>
            <h3>Preparation</h3>
            <p className={`${styles.coursesDetail}`}>1 Prep Course</p>
          </div>
          <HiOutlineArrowNarrowRight />
        </Link>
      </div>
      <div className={`${styles.landingColored}`}></div>
    </div>
  );
};

export default Landing;
