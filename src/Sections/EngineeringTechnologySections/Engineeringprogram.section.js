import React from "react";
import { MastersProgramCard } from "../../Components";
import styles from "./Engineeringsection.module.css";

const Engineeringprogram = () => {
  return (
    <div className={`${styles.engineeringprogram}`}>
      <h1>Higher National Diploma (HND) Programmes</h1>
     
      <div className={`${styles.mastersProgramMain}`}>
        <MastersProgramCard
          programTitle="Networking and Security"
          programType="Full time"
          programCategory="HND in Networking and Security"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Telecommunication"
          programType="Full time"
          programCategory="HND in Telecommunication"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Electrical Power Systems"
          programType="Full time"
          programCategory="HND in Electrical Power Systems"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Software Engineering"
          programType="Full time"
          programCategory="HND in Software Engineering"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Computer Hardware Maintenance"
          programType="Full time"
          programCategory="HND in Computer Hardware Maintenance"
          programLocation="Bamenda School of Management"
        />
       

        
      </div>
    </div>
  );
};

export default Engineeringprogram;
