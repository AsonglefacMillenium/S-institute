import React from "react";
import { Footer, NavBar, Sticker, SubLander } from "../../Components";
import { LanderOne } from "../../resources";
import { CorePrincipleDemand, CorePrincipleLearn, PageDescription } from "../../Sections";
import styles from "./CorePrinciple.module.css";

const CorePrinciple = () => {
  return (
    <div className={`${styles.corePrinciple}`}>
      <NavBar />
      <SubLander
        landerBg={LanderOne}
        LanderText="Learning with head, heart and hands"
        landerdes="The SLUI Approach – Our study concept! "
      />
      <PageDescription
        desHead="Everything revolves around you"
        description="We support you personally and continuously in achieving your goals. Based on our proven Approach, we have aligned all learning objectives, forms of examination, teaching and learning methods for you, in order to make learning as fun and successful as possible."
      />
      <CorePrincipleLearn />
      <CorePrincipleDemand />
      <Sticker />
      <Footer />
    </div>
  );
};

export default CorePrinciple;
