import React from "react";
import {
  FacultyDescription,
  Footer,
  Lander,
  NavBar,
  Sticker,
} from "../../Components";
import { HealthSciencePracOne, HealthSciencesOne } from "../../resources";
import { BachelorDescription, HealthProgrammes } from "../../Sections";
import styles from "./HealthScience.module.css";

const HealthScience = () => {
  return (
    <div className={`${styles.healthScience}`}>
      <NavBar />
      <Lander
        LanderText="Faculty of Health and Biomedical Sciences "
        landerBg={HealthSciencePracOne}
      />
      <BachelorDescription description="The Faculty of Health and Biomedical Sciences continues to benefit from millions of FCFA investment scheme of laboratory modernisation and the development of cutting-edge teaching and research facilities, allied to the provision of clinical-based courses. Academic staff, students and external partners, including MINESUP and MINSANTE, have worked collaboratively during all phases to ensure the learning, teaching and research environment puts students first." />
      <FacultyDescription
        facultyImage={HealthSciencesOne}
        facultyText="Our courses, including an extensive portfolio of CPD and internships, are co-produced with employers and have an underpinning philosophy built upon Interprofessional Learning (IPL) and research where, for example, doctors, nurses, pharmacists and paramedics work in teams for the greater good of patients."
      />
      <BachelorDescription
        description="The Faculty of Health and Biomedical Sciences has the following departments and programmes:"
      />

      <HealthProgrammes />
      <Sticker />
      <Footer />
    </div>
  );
};

export default HealthScience;
