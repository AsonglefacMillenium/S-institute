import React from "react";
import {
  PartnerLogo1,
  PartnerLogo2,
  PartnerLogo3,
  PartnerLogo4,
  PartnerLogo5,
} from "../../resources";
import styles from "./Partner.module.css";

const Partner = () => {
  return (
    <div className={`${styles.partner}`}>
      <div className={`${styles.partnerHead}`}>
        <h1>Memberships and Partnerships</h1>
      </div>

      <div className={`${styles.partnerImages}`}>
        <img src={PartnerLogo1} alt="" />
        <img src={PartnerLogo2} alt="" />
        <img src={PartnerLogo3} alt="" />
        <img src={PartnerLogo4} alt="" />
        <img src={PartnerLogo5} alt="" />
      </div>
    </div>
  );
};

export default Partner;
