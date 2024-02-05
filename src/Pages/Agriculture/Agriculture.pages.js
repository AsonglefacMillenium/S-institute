import React from "react";
import {
  FacultyDescription,
  Footer,
  Lander,
  NavBar,
  Sticker,
} from "../../Components";
import { AgricultureOne, AgricultureTwo } from "../../resources";
import { AgricultureProgrammes, BachelorDescription } from "../../Sections";

const Agriculture = () => {
  return (
    <div>
      <NavBar />
      <Lander
        LanderText="Faculty of Agriculture and Natural Sciences"
        landerBg={AgricultureTwo}
      />
      <BachelorDescription description="Agriculture in today's world is an interesting and challenging industry where you can have a real impact. Our unique programmes combine the core disciplines of agricultural sciences with business management and innovative technology. " />
      <FacultyDescription
        facultyImage={AgricultureOne}
        facultyText="Our classes include lively discussions around current issues as well as hands-on learning in the classroom, the lab and the field, giving you practical experience and a competitive advantage heading into careers on a local, national and global scale. 
Learn ‘hands-on’ alongside active research scientists. Not only are our lecturers leaders in their fields, they are passionate about sharing their knowledge and seeing you reach your potential.

        
Our small class sizes and friendly atmosphere provide the perfect environment for high-quality learning, networking and friendships that last beyond graduation

"
      />
      <BachelorDescription
        description="We offer the following programmes in our faculty;
"
      />

      <AgricultureProgrammes />
      <Sticker />
      <Footer />
    </div>
  );
};

export default Agriculture;
