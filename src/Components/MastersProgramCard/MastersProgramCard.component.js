import React from "react";
import { Link } from "react-router-dom";
import {FiMapPin} from 'react-icons/fi'
import {MdLightbulbOutline} from 'react-icons/md'
import styles from "./MastersProgramCard.module.css";

const MastersProgramCard = ({programTitle, programType, programCategory, programLocation}) => {
  return (
    <Link to="" className={`${styles.mastersProgramCard}`}>
    <div>
    <h3>{programTitle}</h3>
      <div className={`${styles.programType}`}>
        <p>{programType}</p>
      </div>
    </div>
     

      <div className={`${styles.programDetails}`}>
        <div className={`${styles.programCategory}`}>
        <MdLightbulbOutline/>  <p>{programCategory}</p>
        </div>
        <div className={`${styles.programLocation}`}>
        <FiMapPin />  <p>{programLocation}</p>
        </div>
      </div>
    </Link>
  );
};

export default MastersProgramCard;
