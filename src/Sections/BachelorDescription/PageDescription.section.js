import React from 'react'
import styles from "./BachelorDescription.module.css";

const PageDescription = ({description, desHead}) => {
  return (
    <div className={`${styles.bachelorDescription}`}>
    <h3>{desHead}</h3>
    <p>{description}</p>
  </div>
  )
}

export default PageDescription