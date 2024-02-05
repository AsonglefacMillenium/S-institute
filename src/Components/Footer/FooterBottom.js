import React from "react";
import styles from "./Footer.module.css";
import { LargeLogoRed } from "../../resources";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

const FooterBottom = () => {
  return (
    <div className={`${styles.footerBottom}`}>
      <div className={`${styles.footerLogo}`}>
        <img src={LargeLogoRed} alt="" />
        
      </div>
      <div className={`${styles.footerSocial}`}>
        <a href="/">
          <FiFacebook />
        </a>
        <a href="/">
          <FiTwitter />
        </a>
        <a href="/">
          {" "}
          <FiLinkedin />
        </a>
        <a href="/">
          {" "}
          <FiInstagram />
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
