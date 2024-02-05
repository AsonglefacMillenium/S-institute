import React from "react";
import {
  FacultyDescription,
  Footer,
  Lander,
  NavBar,
  Sticker,
} from "../../Components";
import { LanderOne, LanderTwo } from "../../resources";
import { BachelorDescription, Engineeringprogram } from "../../Sections";

const EngineeringTechnology = () => {
  return (
    <div>
      <NavBar />
      <Lander
        landerBg={LanderTwo}
        LanderText="Faculty of Engineering and Technology"
      />
      <BachelorDescription description="The Faculty of Engineering and Technology brings together a spectrum of courses and programmes aligned to the technological needs and requirements of today. Our key areas of teaching cover a wide variety of subjects aligned to computer science and engineering." />
      <FacultyDescription
        facultyImage={LanderOne}
        facultyText="We provide a range of opportunities for our students to work with employers, encouraging them to apply for an industrial placement between the second and third year of their undergraduate degree as well as to complete industry certifications to give them and edge over their peers in the very competitive job market."
      />
      <BachelorDescription description="We offer the following programmes in our faculty of Engineering and Technology:" />
      <Engineeringprogram />
      <Sticker />
      <Footer />
    </div>
  );
};

export default EngineeringTechnology;
