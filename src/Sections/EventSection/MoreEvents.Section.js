import React from 'react'
import { EventContainer, Footer, NavBar } from '../../Components'
import styles from './Events.module.css'

const MoreEventsSection = () => {
  return (
    <div className={`${styles.container}`} >
        <NavBar />
         <div className={`${styles.moreEventsPage}`}>
         <EventContainer />
        <EventContainer />
        <EventContainer />
        <EventContainer />
        <EventContainer />
        <EventContainer />
         </div>
       
        <Footer/>
    </div>
  )
}

export default MoreEventsSection