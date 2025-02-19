import React from 'react'
import { motion } from 'framer-motion'
import '../assets/css/About.css'
import mern from '../assets/images/mern.png'
import developer from '../assets/images/developer.webp'

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about'>
          <div className='About-text'>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='text-about'
            >
              ABOUT ME
            </motion.h3>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              A Passionate MERN Stack Developer 📍
            </motion.h3>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Work Experience
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className='about-job'
            >
              <p>
                <strong>Web Developer</strong> | RDIGI WORKS <br /> June 2024 to
                November 2024, Bhayandar, Maharashtra
              </p>
              <ul>
                <li>
                  Developed dynamic web applications using Node.js and MongoDB,
                  improving backend functionality and data management.
                </li>
                <li>
                  Worked with frontend developers to integrate RESTful APIs,
                  facilitating seamless data flow and enhancing functionality.
                </li>
                <li>
                  Conducted thorough testing and debugging of web applications,
                  ensuring optimal performance and reliability.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className='image'
            >
              <motion.img
                src={mern}
                alt='MERN Stack'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className='img'
          >
            <motion.img
              src={developer}
              alt='Developer'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default About
