import React from 'react'
import { Footer, Lander, NavBar, Sticker } from '../../Components'
import {  LanderTwo } from '../../resources'
import { BachelorDescription, MastersAlternative, MastersDemanding, MastersProgram, Undecided } from '../../Sections'
import styles from './Masters.module.css'

const Masters = () => {
  return (
    <section className={`${styles.masters}`}>
<NavBar />
<Lander landerBg={LanderTwo} LanderText="Masters programmes - Your start to career advancement"/>
<BachelorDescription
        description=" St Louis University Institute gives the opportunity for workers in any part of the world to
further their studies and gain quality degrees while still working 100% at their job site. This
is made possible through their accredited distance learning platform that mimics the
traditional onsite learning."
      />

      <MastersDemanding />
      <MastersProgram/>
      <MastersAlternative />
      <Undecided />
      <Sticker />
<Footer />
    </section>
  )
}

export default Masters