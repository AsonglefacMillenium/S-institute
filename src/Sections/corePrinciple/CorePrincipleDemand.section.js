import React from "react";
import styles from "./CorePrinciple.module.css";

const CorePrincipleDemand = () => {
  return (
    <div className={`${styles.corePrincipleDemand}`}>
 <div className={`${styles.corePrincipleDemandWrapper}`}>
    
    <h2>Our Principle</h2>
    <h1>Knowledge on demand? No, thanks! </h1>

    <div className={`${styles.principles}`}>
      <h3>Learning at eye level </h3>
      <p>
        Pure frontal teaching does not exist in our classrooms. Instead, our
        instructors become individual learning coaches for you. Together, you
        will not only acquire specialist knowledge, but also hone your soft
        and hard skills. In order to achieve this, we rely on direct
        communication.
      </p>
    </div>

    <div className={`${styles.principles}`}>
      <h3>No fear of making mistakes </h3>
      <p>
        Trying out is allowed here! Even welcomed, since we rely on
        experience-based learning. It's not always about right or wrong, above
        all it's about trying things out and getting to know each other. At
        SLUI, you don't study for the professor or the examinations office,
        but primarily for your own projects and your whole (professional)
        life.
      </p>
    </div>

    <div className={`${styles.principles}`}>
      <h3>Learning for the real world </h3>
      <p>
        You don't have to do countless internships after you graduate.
        Practical teamwork on real projects and semester internships with
        partners from the real world will prepare you optimally for the
        professional world. At the same time, you will develop social skills
        such as the ability to accept criticism, to think outside the box and
        to solve problems creatively. These are exactly the skills that
        employers expect from their employees today.
      </p>
      <p>
        In addition, you will not only have a certificate in your hand, but
        also project references from real world partners, that you can provide
        alongside your job applications. AND: you'll know where your personal
        strengths lie.
      </p>
    </div>
  </div>
    </div>
   
  );
};

export default CorePrincipleDemand;
