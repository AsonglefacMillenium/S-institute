import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footerwrapper}`}>
        <ul>
          <li className={`${styles.footerStudies}`}>All About Your Studies</li>
          <li>
            <Link to="/hnd"> HND</Link>
          </li>
          <li>
            <Link to="/bachelors">Bachelors</Link>
          </li>
          <li>
            <Link to="/masters">Masters</Link>
          </li>
          <li>
            <Link to="/foundation">Short Courses</Link>
          </li>
          <li>
            <Link to="">Admission Process</Link>
          </li>
          <li>
            <Link to="">Student Advisory Board</Link>
          </li>
        </ul>

        <ul>
          <li className={`${styles.footerStudies}`}>Our Institution</li>
          <li>
            <Link to=""> Why St Louis?</Link>
          </li>
          <li>
            <Link to="">About Us</Link>
          </li>
          <li>
            <Link to="">Our Universities</Link>
          </li>
          <li>
            <Link to="">Our Admin Team</Link>
          </li>
          <li>
            <Link to="">Services and Facilities</Link>
          </li>
        </ul>

        <ul>
          {/* <li className={`${styles.footerContacthead}`}>Contact Us</li> */}

          <li className={`${styles.footerContacthead}`}>
            Your Contact/Our Welcome Desk in Douala
          </li>
          <li className={`${styles.footerContactBox}`}>
            <AiOutlineMail className={`${styles.footerIcon}`} />{" "}
            <p> info@slui.org</p>
          </li>
          <li className={`${styles.footerContactBox}`}>
            <HiPhone className={`${styles.footerIcon}`} />{" "}
            <p>(+237) 678425922 / 671710928</p>
          </li>
          <br />
          <li className={`${styles.footerContacthead}`}>
            Your Contact/SLUI Campuses
          </li>
          <li className={`${styles.footerContactBox}`}>
            <p>
              <b>Douala I</b>- Rond Point Maetur, Bonamousadi
            </p>
          </li>
          <li className={`${styles.footerContactBox}`}>
            <p>
              <b>Douala II</b>- Opposite Nestle, Bonaberi
            </p>
          </li>
          <li className={`${styles.footerContactBox}`}>
            <p>
              <b>Bamenda </b>- Mile 3 Nkwen & Ndu
            </p>
          </li>
          <li className={`${styles.footerContactBox}`}>
            <p>
              <b>Yaounde</b>- Despot De Bois, Simbock
            </p>
          </li>
          {/* <li className={`${styles.footerContactBox}`}>
             <p><b>Ndu</b>- Opposit The Ndu Gendarmerie, kakar</p>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
