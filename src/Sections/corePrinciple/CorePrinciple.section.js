import React from "react";
import { Link } from "react-router-dom";
import { HealthSciencesOne } from "../../resources";
import styles from "./CorePrinciple.module.css";

const CorePrinciple = () => {
  return (
    <div className={`${styles.corePrinciple}`}>
      <div className={`${styles.corePrincipleWrapper}`}>
        <div className={`${styles.corePrincipleText}`}>
          <p className={`${styles.principleTitle}`}>
            THE SLUI APPROACH - OUR STUDY CONCEPT!
          </p>
          <h1 className={`${styles.principleHeader}`}>
            You are the centre of your studies
          </h1>
          <p className={`${styles.principleSubHeader}`}>
            Study according to the CORE Principle! Hands-on learning in small
            teams, step-by-step skill aquisition in field work and semester
            internships as well as individual support from lecturers.
          </p>
          <p className={`${styles.principleBody}`}>
            There is no more lecture-centred teaching at SLUI. Instead, our
            instructors become personal learning coaches for you. Not only will
            you develop specialist knowledge together, but also work on
            improving your soft and hard skills. To do this, we rely on direct
            communication. Individual advice, digital exchange and continuous
            feedback are important to us as well as club activities such as the
            SLUI Toastmasters club.
          </p>

          <Link to="/corepriciples">
            <button className={`${styles.principleButton}`}>
              Our Core Principle
            </button>
          </Link>
        </div>
        <div className={`${styles.corePrincipleImage}`}>
          <img src={HealthSciencesOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CorePrinciple;
