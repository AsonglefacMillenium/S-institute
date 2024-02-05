import React from "react";
import { MdHorizontalRule } from "react-icons/md";
import { Button } from "../../Components";
import styles from "./FoundationSections.module.css";

const FoundationGateway = () => {
  return (
    <div className={`${styles.foundationGateway}`}>
      <div className={`${styles.gatewayMain}`}>
        <h3>A Gateway to Your Medical School and Degree</h3>
        <p>
          Thanks to the preparatory courses in fields such as anatomy,
          pharmacology or biochemistry etc.., you will be well-equipped to start
          your medical school journey in one of our partner universities abroad.
        </p>
        <p>
          By joining the SLUI International Medical Foundation Programme, you
          will also receive a conditional offer from our partner universities to
          guarantee your progression you progression into year of your chosen
          medical programmes once you have completed your one year foundation
          programme.
        </p>

        <h3>Prgram details</h3>
        <ul>
          <li><MdHorizontalRule className={`${styles.gatewayIcon}`}/><span>Duration:</span> 2 semesters (1 year)</li>
          <li><MdHorizontalRule className={`${styles.gatewayIcon}`}/><span>Start:</span> October every year</li>
          <li><MdHorizontalRule className={`${styles.gatewayIcon}`}/><span>Tuition Fees:</span> 1000.000 FCFA</li>
        </ul>

        <Button buttonText="Request Information" />
      </div>
    </div>
  );
};

export default FoundationGateway;
