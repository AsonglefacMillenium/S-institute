import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBarLinks = () => {
  return (
    <div className={`${styles.navBarLinks}`}>
      <div className={`${styles.navLinks}`}>
        <Link to="">About Us</Link>
        <Link to="">Programmes</Link>
        <Link to="">Faculties</Link>
        <Link to="">Campuses</Link>
      </div>
    </div>
  );
};

export default NavBarLinks;
