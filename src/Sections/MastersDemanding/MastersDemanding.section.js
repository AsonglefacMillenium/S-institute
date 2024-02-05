import React from 'react'
import { LandingImage } from '../../resources/index.js'
import styles from './MastersDemanding.module.css'

const MastersDemanding = () => {
  return (
    <div className={`${styles.mastersDemanding}`}>
<h3>Masters program at St. Louis Institute</h3>
<h1>New, demanding and challenging</h1>

<div className={`${styles.mastersDemandingMain}`}>
<div className={`${styles.maincontent}`}>
<p>New challenges require new answers. Our innovative MBA programmes emphasise both economic feasibility and social responsibility, placing great value on the development of your soft skills and other competences, such as communication and intercultural skills.</p>

<h4>Core values</h4>
<ul>
  <li>Flexibility, can be done almost exclusively online (70% online and 30% onsite)</li>
  <li>Qualified lecturers with interactive sessions from 6- 10 pm daily</li>
</ul>




<p>All Master's programmes are aimed at university graduates with at least a couple of years of professional experience who would like to advance their business knowledge in a particular field and who wish to develop their personal skills. Join us: the future is waiting for you.</p>

<h4>Requirement</h4>

<p>In addition to entry requirement, students for this option must be ready to study online and
must have access to internet connectivity.</p>
</div>

<img src={LandingImage} alt="" className={`${styles.mainImage}`}/>

</div>
    </div>
  )
}

export default MastersDemanding