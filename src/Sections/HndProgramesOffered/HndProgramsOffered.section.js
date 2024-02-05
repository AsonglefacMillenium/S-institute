import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProgramsOffered.module.css";
import { HiArrowSmRight } from "react-icons/hi";

const HndProgramsOffered = () => {
  return (
    <div className={`${styles.programsOffered}`}>
      <p>Below are the list of programmes we offer</p>

      <div className={`${styles.programesList}`}>
        <div className={`${styles.programBox}`}>
          <h1>Health and Biomedical Sciences </h1>

          <Link to="" className={`${styles.programProper}`}>
            HND. Clinical Optimetry and Ophtamology
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Nutrition and Dietetics 
            
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Radiology and Ultrasonography  <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Physiotherapy <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Midwifery 
            
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Pharmacy Technology  <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Dental Therapy  <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Medical Lab Sciences  <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Pharmaceutical Sciences   <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Nursing   <HiArrowSmRight />
          </Link>
        </div>

        <div className={`${styles.programBox}`}>
          <h1>Agriculture and Natural Sciences </h1>

         
          <Link to="" className={`${styles.programProper}`}>
          HND. Animal Production  <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Agricultural Production Technology
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Crop Production 
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Agro-Pastoral Advisor 
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Food Processing Technology  
            <HiArrowSmRight />
          </Link>
          
        </div>

        <div className={`${styles.programBox}`}>
          <h1>Engineering and Technology  </h1>

         

          <Link to="" className={`${styles.programProper}`}>
          HND. Networking and Security   <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Telecommunication
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Electrical Power Systems  
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Software Engineering  
            <HiArrowSmRight />
          </Link>
          <Link to="" className={`${styles.programProper}`}>
          HND. Computer Hardware Maintenance   
            <HiArrowSmRight />
          </Link>
          
        </div>

       

      
      </div>
    </div>
  );
};

export default HndProgramsOffered;
