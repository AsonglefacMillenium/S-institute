import React, {  useState } from "react";
import { LargeLogoDark, LargeLogoWhite } from "../../resources";
import styles from "./NavBar.module.css";
import NavBarLinks from "./NavBarLinks";
import { RiMenu3Line, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";

const NavBar = () => {
  const [navModal, setNavModal] = useState(false);
  const [whysl, setWhysl] = useState();
  const [faculty, setFaculty] = useState();
  const [campus, setCampus] = useState();
  const [facility, setFacility] = useState();

 
  return (
    <div className={`${styles.navBar}`}>
      <div className={`${styles.navBarLogo}`}>
        <img src={LargeLogoWhite} alt="" />
      </div>

      <NavBarLinks />

      <div className={`${styles.navBarIcons}`}>
        <MdLanguage />
        <RiSearchLine />
        <RiMenu3Line onClick={() => setNavModal(true)} />
      </div>
      {navModal && (
        <div className={`${styles.navBarModal}`}>
          <div className={`${styles.navBarModalCancel}`}>
            <h1 onClick={() => setNavModal(false)}>X</h1>
          </div>

          <div className={`${styles.NavBarModalLinks}`}>
            <h3>Your Studies</h3>
            <div className={`${styles.navBarModalMain}`}>
              <div className={`${styles.navBarModalRight}`}>
                <Link to="">Request Prospectus</Link>
                <Link to="">How to Apply</Link>
                <Link to="">Fees</Link>
                <Link to="">Scholarships</Link>
                <Link to="">Student Guide</Link>

                <div className={`${styles.modalImage}`}>
                  <img src={LargeLogoDark} alt="" />
                </div>
              </div>

              <div className={`${styles.NavBarModalLeft}`}>
                <Link to="" onClick={() => {setWhysl(true); setCampus(false); setFacility(false); setFaculty(false);}}  >
                  Why SLUI? <HiOutlineArrowNarrowRight />
                </Link>
                <div className={`${styles.modalUnderline}`}></div>
                <Link to="" onClick={() => {setCampus(true); setWhysl(false); setFacility(false); setFaculty(false)}} >
                  Study at SLUI <HiOutlineArrowNarrowRight />
                </Link>
                <div className={`${styles.modalUnderline}`}></div>
                <Link to="" onClick={() => {setFaculty(true); setCampus(false); setWhysl(false); setFacility(false)}}>
                  Faculties <HiOutlineArrowNarrowRight />
                </Link>
                <div className={`${styles.modalUnderline}`}></div>
                <Link to="" onClick={() => {setFacility(true); setFaculty(false); setCampus(false); setWhysl(false)}}>
                  Facilities <HiOutlineArrowNarrowRight />
                </Link>
                <div className={`${styles.modalUnderline}`}></div>

                <div className={`${styles.modalBlur}`}>
                  <Link to="" className={`${styles.modalBlur}`}>
                    Handbook
                  </Link>
                  <Link to="" className={`${styles.modalBlur}`}>
                    Core principle
                  </Link>

                  <Link to="" className={`${styles.modalBlur}`}>
                    Leadership team
                  </Link>
                  <Link to="" className={`${styles.modalBlur}`}>
                    Alumni
                  </Link>
                  <Link to="" className={`${styles.modalBlur}`}>
                    News
                  </Link>
                  <Link to="" className={`${styles.modalBlur}`}>
                    Events
                  </Link>
                  <Link to="" className={`${styles.modalBlur}`}>
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className={`${styles.modalSubLinks}`}>
                {whysl ? (
                  <div className={`${styles.subLinks}`}>
                    <Link to="">
                      <h5>Why St. Louis</h5>
                    </Link>
                    <Link to="/coreprinciples">
                      <h5>The Core principle</h5>
                    </Link>
                  </div>
                ) : faculty ? (
                  <div className={`${styles.subLinks}`}>
                    <Link to="/healthscience">
                    <p>Faculty of </p>
                      <h5>Health and Biomedical Science</h5>
                    </Link>
                    <Link to="/engineering-technology">
                    <p>Faculty of</p>
                      <h5>Engineering and Technology</h5>
                    </Link>

                    <Link to="/agriculture">
                    <p>Faculty of </p>
                      <h5>Agriculture and Natural Sciences</h5>
                    </Link>
                   
                  </div>
                ) : campus ? (
                  <div className={`${styles.subLinks}`}>
                    <Link to="">
                      <h5>Why St. Louis</h5>
                    </Link>
                    <Link to="">
                      <h5>The Core principle</h5>
                    </Link>
                  </div>
                ) : facility? (
                  <div className={`${styles.subLinks}`}>
                    <Link to="">
                      <h5>Why St. Louis</h5>
                    </Link>
                    <Link to="">
                      <h5>The Core principle</h5>
                    </Link>
                  </div>
                ) : <div></div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
