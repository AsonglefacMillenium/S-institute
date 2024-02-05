import React from "react";
import { LandingImage } from "../../resources";
import styles from "./FoundationSections.module.css";

const FoundationIntro = () => {
  return (
    <div className={`${styles.foundationIntro}`}>
      <img src={LandingImage} alt="" />
      <div className={`${styles.foundationIntroMain}`}>
        <h1>Your Preparatory Course for Undergraduate Studies</h1>
        <p>
          The new SLUI International Medical Foundation Programme is a
          foundation course in Cameroon that provides you with the knowledge and
          competences to meet entry requirement into medical schools abroad.
        </p>
        <p>
          Upon completing the programme and achieving the required grades, you
          can directly progress to the first year in Medicine, Pharmacy,
          Dentistry or Veterinary Medicine programme of your choice in our
          partner medical schools across America, Europe, Asia and Africa.
        </p>

        <p>
          The International Medical Foundation Programme is the perfect choice
          for international and local students who need to complete one year of
          university studies after graduating from secondary school to enter
          medical school programmes abroad.
        </p>

        <p>
          <span>Note:</span> Some of our programmes may have additional entry
          criteria, depending on the specific university or medical school the
          student will like to progress to.
        </p>
      </div>
    </div>
  );
};

export default FoundationIntro;
