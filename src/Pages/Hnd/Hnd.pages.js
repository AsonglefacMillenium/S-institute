import React from "react";
import { Footer, Lander, NavBar, Sticker } from "../../Components";
import { LanderTwo } from "../../resources";
import { BachelorDescription, HndProgramsOffered, Undecided} from "../../Sections";
import styles from "./Hnd.module.css";

const Hnd = () => {
  return (
    <section className={`${styles.hnd}`}>
      <NavBar />
      <Lander
        LanderText="HND programmes - your start to a national career"
        landerBg={LanderTwo}
      />
      <BachelorDescription
        description="Health, Agriculture, Engineering and Technology industries have never been so diverse. The modern range of courses offered by ST. Louis University Institute holds the right HND programme for every talent. Discover the opportunities and your path to a dream career in the health, agriculture, engineering and technology sector.
"
      />

      <HndProgramsOffered />
      <Undecided />
      <Sticker />
      <Footer />
    </section>
  );
};

export default Hnd;
