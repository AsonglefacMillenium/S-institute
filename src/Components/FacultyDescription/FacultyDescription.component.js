import React from "react";
import styles from "./FacultyDescription.module.css";

const FacultyDescription = ({facultyText, facultyImage}) => {
  return (
    <div className={`${styles.facultyDescription}`}>
      <div className={`${styles.mainText}`}>
        <p>
          {facultyText}
        </p>
      </div>
      <div className={`${styles.mainImage}`}>
        <img src={facultyImage} alt="" />
      </div>
    </div>
  );
};

export default FacultyDescription;
