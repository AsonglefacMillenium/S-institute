import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonText }) => {
  return <button className={`${styles.button}`}>{buttonText}</button>;
};

export default Button;
