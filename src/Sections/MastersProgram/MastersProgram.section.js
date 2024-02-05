import React from "react";
import { MastersProgramCard } from "../../Components";
import styles from "./Mastersprogram.module.css";

const MastersProgram = () => {
  return (
    <div className={`${styles.mastersProgram}`}>
      <h1>Our Master's program in Cameroon</h1>
<p className={`${styles.masterdes}`}>The following master’s programs are currently being offered for holders of Bachelor’s
degrees or equivalent at St Louis University Institute</p>
      <div className={`${styles.mastersProgramMain}`}>
        <MastersProgramCard
          programTitle="Midwifery"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Pediatric Nursing"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Medical Surgical Nursing"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Oncology Nursing"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Nurse Anesthesiat"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />
        <MastersProgramCard
          programTitle="Geriatric Nursing"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />

<MastersProgramCard
          programTitle="Public Health"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />

<MastersProgramCard
          programTitle="Physiotherapy"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />

<MastersProgramCard
          programTitle="Medical Imaging Technology"
          programType="Full time"
          programCategory="Master's in Business Administration"
          programLocation="Bamenda School of Management"
        />
      </div>
    </div>
  );
};

export default MastersProgram;
