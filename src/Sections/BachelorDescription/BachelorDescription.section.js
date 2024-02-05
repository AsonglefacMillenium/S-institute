import React from "react";
import styles from "./BachelorDescription.module.css";

const BachelorDescription = ({ description }) => {
  return (
    <div className={`${styles.bachelorDescription}`}>
      <p>{description}</p>
    </div>
  );
};

export default BachelorDescription;
