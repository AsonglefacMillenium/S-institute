import React from "react";
import { Footer, Lander, NavBar, Sticker } from "../../Components";
import { LanderOne } from "../../resources";
import { BachelorDescription, ProgramsOffered, Undecided } from "../../Sections";
import styles from "./Bachelors.module.css";

const Bachelors = () => {
  return (
    <section className={`${styles.bachelors}`}>
      <NavBar />
      <Lander
        LanderText="Bachelor's programmes - your start to an international career"
        landerBg={LanderOne}
      />
      <BachelorDescription
        description=" Health, Agriculture, Engineering and Technology industries have never been so diverse. The modern range of courses offered by ST. Louis University Institute holds the right degree programme for every talent. Discover the opportunities and your path to a dream career in the health, agriculture, engineering and technology sector.
"
      />

      <ProgramsOffered />
      <Undecided />
      <Sticker />
      <Footer />
    </section>
  );
};

export default Bachelors;
