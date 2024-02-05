import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProgramsOffered.module.css";
import { HiArrowSmRight } from "react-icons/hi";

const ProgramsOffered = () => {
  return (
    <div className={`${styles.programsOffered}`}>
      <p>Below are the list of programmes we offer</p>

      <div className={`${styles.programesList}`}>
        <div className={`${styles.programBox}`}>
          <h1>Health and Biomedical Sciences </h1>

          <Link to="" className={`${styles.programProper}`}>
            B.A. Clinical Optimetry and Ophtamology
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Nutrition and Dietetics
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Radiology and Ultrasonography <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Physiotherapy <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Midwifery
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Pharmacy Technology <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Dental Therapy <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Medical Lab Sciences <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Pharmaceutical Sciences <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Nursing <HiArrowSmRight />
          </Link>
        </div>

        <div className={`${styles.programBox}`}>
          <h1>Agriculture and Natural Sciences </h1>

          <Link to="" className={`${styles.programProper}`}>
            B.A. Animal Production <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
            B.A. Agronomy
            <HiArrowSmRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramsOffered;
