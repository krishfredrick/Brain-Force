import React from 'react'
import { motion } from "framer-motion";

import './style.css'
const Banner = () => {
  return (
    <div>
      
      <section className='sect-1 banner'>
        <div className="info">
        <motion.h1
          className={"bigHeading"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          SpaceX capsules
        </motion.h1>
        <motion.h1
          className={"bigHeading2"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className={"para"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          SpaceX through a public api in real time. Visit the 
          do so!
        </motion.p>
        </div>
        </section>
    </div>
  )
}

export default Banner
