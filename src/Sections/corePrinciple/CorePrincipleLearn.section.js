import React from 'react'
import styles from "./CorePrinciple.module.css";
import { LanderThree } from '../../resources'

const CorePrincipleLearn = () => {
  return (
    <div className={`${styles.corePrincipleLearn}`}>
<h1>Here you learn step by step </h1>

<div className={`${styles.coreLearnMain}`}>
<div className={`${styles.coreLearnText}`}>
    <p>We believe that sustainable learning is only possible if there is enough space for experimentation, games and critical thinking. That is why we have completely restructured the classical course of studies.
</p>
</div>

<div className={`${styles.coreLearnImage}`}>
    <img src={LanderThree} alt="" />
</div>
</div>
    </div>
  )
}

export default CorePrincipleLearn