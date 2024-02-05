import React from "react";
import { AdminCarousel, Footer, NavBar, Sticker } from "../../Components";
import {
  Blog,
  CorePrinciple,
  EnquireMore,
  Events,
  Landing,
  Partner,
  Shape,
  Unibuddy,
} from "../../Sections";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={`${styles.home}`}>
      <NavBar />

      <Landing />
      <Shape />
      <CorePrinciple />
      <Events />
      <Blog />
      <Unibuddy />
      <EnquireMore />
      <Partner />
      <AdminCarousel />
      <Sticker />
      <Footer />
    </section>
  );
};

export default Home;
