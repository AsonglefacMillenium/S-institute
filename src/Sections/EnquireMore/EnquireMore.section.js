import React from "react";
import { Convince, LearnMore } from "../../Components";
import styles from "./EnquireMore.module.css";

const EnquireMore = () => {
  return (
    <div className={`${styles.enquireMore}`}>
      <div className={`${styles.enquireMoreWrapper}`}>
        <LearnMore />
        <Convince />
      </div>
    </div>
  );
};

export default EnquireMore;
