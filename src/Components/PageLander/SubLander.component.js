import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styles from "./Lander.module.css";

const SubLander = ({landerBg, LanderText, landerdes}) => {
  return (
    <div
    className={`${styles.lander}`}
    style={{ backgroundImage: `url(${landerBg})` }}
  >
    <div className={`${styles.landerWrapper}`}>
      <Link to="/">
        <HiArrowNarrowLeft className={`${styles.landerIcon}`}/>
        <p>Back</p>
      </Link>

      <h1>{LanderText}</h1>
      <p>{landerdes}</p>
    </div>
  </div>
  )
}

export default SubLander