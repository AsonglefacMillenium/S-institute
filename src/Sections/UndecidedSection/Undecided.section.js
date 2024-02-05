import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LanderOne, LanderThree } from "../../resources";
import styles from "./Undecided.module.css";

const Undecided = () => {
  const [showHover, setShowHover] = useState(false);
  const [showHoverRight, setShowHoverRight] = useState(false);
  return (
    <div className={`${styles.undecided}`}>
      <h1 className={`${styles.undecidedHead}`}>Still Undecided?</h1>
      <div className={`${styles.undecidedMain}`}>
        <div
          className={`${styles.undecidedLeft}`}
          onMouseOver={() => setShowHover(true)}
          onMouseLeave={() => setShowHover(false)}
        >
          <img src={LanderOne} alt="" />

          <div className={`${styles.undecidedContent}`}>
            {showHover ? (
              <Link to="">
                <div className={`${styles.undecideHover}`}>
                  <h2>Why St. Louis?</h2>
                  <p>We help you shape your future</p>
                </div>
              </Link>
            ) : (
              <h3>Why St. Louis</h3>
            )}
          </div>
        </div>

        <div
          className={`${styles.undecidedRight}`}
          onMouseOver={() => setShowHoverRight(true)}
          onMouseLeave={() => setShowHoverRight(false)}
        >
          <img src={LanderThree} alt="" />

          <div className={`${styles.undecidedContent}`}>
            {showHoverRight ? (
              <Link to="/Coreprinciples">
                <div className={`${styles.undecideHover}`}>
                  <h2>Our Core Principles</h2>
                  <p>Learning at eye level</p>
                </div>
              </Link>
            ) : (
              <h3>Our Core Principles</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Undecided;
