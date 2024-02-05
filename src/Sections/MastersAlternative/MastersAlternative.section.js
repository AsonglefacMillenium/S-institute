import React from "react";
import {Link} from 'react-router-dom'
import { LanderOne } from "../../resources";
import styles from "./MastersAlternative.module.css";

const MastersAlternative = () => {
  return (
    <div className={`${styles.mastersAlternative}`}>
    <h3>Master's Alternatives</h3>
      <div className={`${styles.alternativeMain}`}>
        
        <img src={LanderOne} alt="" />

        <div className={`${styles.alternativeContent}`}>
          <h1>One year Master's</h1>
          <p>
            You want to do a business degree? Perhaps our one-year Master's
            programmes could also be interesting for you, e.g.
            <ul>
              <li><Link to=''> M.A Hospitality Management and Leadership</Link>
             </li>
             <li><Link to=''> M.A Hospitality Management and Leadership</Link>
             </li>
             <li><Link to=''> M.A Hospitality Management and Leadership</Link>
             </li>
             <li><Link to=''> M.A Hospitality Management and Leadership</Link>
             </li>
             <li><Link to=''> M.A Hospitality Management and Leadership</Link>
             </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MastersAlternative;
