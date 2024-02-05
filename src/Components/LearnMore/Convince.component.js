import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./LearnMore.module.css";

const Convince = () => {
  return (
    <div className={`${styles.learnMore}`}>
      <h3>LET US CONVINCE YOU</h3>
      <h1>Why St. Louis?</h1>
      <div className={`${styles.learnMoreLinks}`}>
        <Link to="">
          The CORE Principle{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
        <Link to="">
          Renowned Partner Companies{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
        <Link to="">
          Personalise Your Studies{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
        <Link to="">
          Verified and Recognised{" "}
          <HiOutlineArrowNarrowRight className={`${styles.moreIcons}`} />
        </Link>
      </div>
    </div>
  );
};

export default Convince;
