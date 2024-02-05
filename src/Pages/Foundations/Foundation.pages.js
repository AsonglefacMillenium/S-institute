import React from "react";
import { Footer, Lander, NavBar, Sticker } from "../../Components";
import { LanderOne } from "../../resources";
import { FoundationGateway, FoundationIntro, Undecided} from "../../Sections";
import styles from "./Foundation.module.css";

const Foundation = () => {
  return (
    <section className={`${styles.foundation}`}>
      <NavBar />
      <Lander
        landerBg={LanderOne}
        LanderText="Our Foundation Course
SLUI Medical Foundation Programme"
      />
      <FoundationIntro />
     <FoundationGateway />
     <Undecided />
      <Sticker />
      <Footer />
    </section>
  );
};

export default Foundation;
