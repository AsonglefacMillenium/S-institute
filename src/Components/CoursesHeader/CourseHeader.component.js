import React from "react";
import styles from "./CourseHeader.module.css";

const CourseHeader = ({courseTitle, courseDes}) => {
  return (
    <div className={`${styles.courseHeader}`}>
      <h1>{courseTitle}</h1>
      <p>
       {courseDes}
      </p>
    </div>
  );
};

export default CourseHeader;
