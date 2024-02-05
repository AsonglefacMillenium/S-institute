import React from "react";
import { LanderOne } from "../../resources";
import styles from "./AdminCarousel.module.css";

const CarouselCard = () => {
  return (
    <div className={`${styles.carouselCard}`}>
      <img src={LanderOne} alt="" />
      <p className={`${styles.cardTitleName}`}>Dr. John Doe</p>
      <p className={`${styles.cardTitlePosition}`}>Dean of Academic studies</p>
    </div>
  );
};

export default CarouselCard;
