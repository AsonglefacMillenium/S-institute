import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={`${styles.searchComponent}`}>
      <div className={`${styles.searchWrapper}`}>
        <div className={styles.searchCard}></div>

        <div className={`${styles.Main}`}></div>
      </div>
    </div>
  );
};

export default Search;
