import React from "react";
import { Link } from "react-router-dom";
import styles from "./LearnMore.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const LearnMore = () => {
  return (
    <div className={`${styles.learnMore} ${styles.learnMoreMargin}`}>
      <h3>LEARN MORE</h3>
      <h1>Your Studies</h1>
      <div className={`${styles.learnMoreLinks}`}>
        <Link to="">
          Talk to Our Student Advisors{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
        <Link to="">
          Application and Admission{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
        <Link to="">
          Financing{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
        <Link to="">
          Accomodation{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
        <Link to="">
          Study out of Town{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
      </div>
    </div>
  );
};

export default LearnMore;
