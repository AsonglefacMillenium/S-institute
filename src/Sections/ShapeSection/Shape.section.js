import React from "react";
import styles from "./Shape.module.css";

const Shape = () => {
  return (
    <div className={`${styles.shapeSection}`}>
      <h1>We shape the future</h1>
      <p>
        Three Faculties and five campuses in four cities: Douala, Yaounde,
        Bamenda and Ndu. Lecturers and students from all over Cameroon and
        abroad in accredited English-language study programmes. Diverse
        opportunities in Biomedical and health sciences, Engineering and
        technology, Agriculture and natural sciences.
      </p>
    </div>
  );
};

export default Shape;
