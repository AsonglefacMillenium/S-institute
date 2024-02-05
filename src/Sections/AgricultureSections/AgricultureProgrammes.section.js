import React from "react";
import { MastersProgramCard } from "../../Components";
import styles from "./AgricultureSections.module.css";

const AgricultureProgrammes = () => {
  return (
    <div className={`${styles.agricultureProgrammes}`}>
      <div className={`${styles.departments}`}>
        <h1>Higher National Diploma(HND) Programmes</h1>
       
        <div className={`${styles.mastersProgramMain}`}>
          <MastersProgramCard
            programTitle="Animal Production"
            programType="Full time"
            programCategory="HND in Animal Production"
            programLocation="Bamenda School of Management"
          />
          <MastersProgramCard
            programTitle="Agricultural Production Technology"
            programType="Full time"
            programCategory="HND in Agricultural Production Technology"
            programLocation="Bamenda School of Management"
          />
          <MastersProgramCard
            programTitle="Crop Production"
            programType="Full time"
            programCategory="HND in Crop Production"
            programLocation="Bamenda School of Management"
          />
          <MastersProgramCard
            programTitle="Agro-Pastoral Advisor"
            programType="Full time"
            programCategory="HND in Agro-Pastoral Advisor"
            programLocation="Bamenda School of Management"
          />
          <MastersProgramCard
            programTitle="Food Processing Technology"
            programType="Full time"
            programCategory="HND in Food Processing Technology"
            programLocation="Bamenda School of Management"
          />
         
        </div>
      </div>

      <div className={`${styles.departments}`}>
        <h1>Bachelor Degree Programmes </h1>
       
        <div className={`${styles.mastersProgramMain}`}>
          <MastersProgramCard
            programTitle="Animal Production"
            programType="Full time"
            programCategory="Bachelor's in Animal Production"
            programLocation="Bamenda School of Management"
          />
          <MastersProgramCard
            programTitle="Agronomy"
            programType="Full time"
            programCategory="Bachelor's in Agronomy"
            programLocation="Bamenda School of Management"
          />
          
         
         
        </div>
      </div>
      </div>
    
  );
};

export default AgricultureProgrammes;
