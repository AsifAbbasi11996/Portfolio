import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Typed from 'typed.js'
import { motion } from 'framer-motion' // For smooth animations
import '../assets/css/Home.css'
import hii from '../assets/images/hii.png'
import javascript from '../assets/images/js.png'
import react from '../assets/images/react.png'
import node from '../assets/images/nodejs.png'
import mongodb from '../assets/images/mongodb.png'
import tailwindcss from '../assets/images/tailwindcss.png'

const Home = () => {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: [
        'Web Developer.',
        'MERN Stack Developer.',
        'Full Stack Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: false // Hide cursor for a cleaner look
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className='home-container'>
        <div className='hero-main'>
          <div className='hero-text'>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm <span className='purple'>Asif Abbasi</span>{' '}
              <img className='hii' src={hii} alt='' />
              <br /> and I am a passionate <br />
            </motion.h1>

            <motion.span
              id='element'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
            ></motion.span>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              I specialize in building modern and scalable web applications
              using the latest technologies. <br />
              My expertise includes front-end and back-end development, creating
              seamless user experiences, and solving real-world problems.
            </motion.p>
          </div>

          <motion.div
            className='hero-pic'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* You can add an image or animation here */}
          </motion.div>
        </div>

        <div className='button-tech'>
          <div className='buttons'>
            <NavLink
              to='https://drive.google.com/file/d/1Pj2vVmlMceYQTXd1-6nuwNozwfouokSx/view?usp=drive_link'
              target='_blank'
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 10px rgb(0, 255, 255)'
                }}
                transition={{ duration: 0.3 }}
              >
                Download Resume
              </motion.button>
            </NavLink>
            <NavLink to='/contact'>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 10px rgb(0, 255, 255)'
                }}
                transition={{ duration: 0.3 }}
              >
                Contact Me
              </motion.button>
            </NavLink>
          </div>

          <div className='tech'>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Tech Stack
            </motion.h4>
            <div className='lang'>
              <motion.div className='center'>
                <motion.img
                  src={javascript}
                  alt=''
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={react}
                  alt=''
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={node}
                  alt=''
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  className='mongodb'
                  src={mongodb}
                  alt=''
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  className='tailwind'
                  src={tailwindcss}
                  alt=''
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.i
                  className='fa-brands fa-html5'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
                <motion.i
                  className='fa-brands fa-css3-alt'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='social_icons'>
          <div className='icon li'>
            <NavLink to='https://www.linkedin.com/in/asif-abbasi-42962a245'>
              <motion.i
                className='fa-brands fa-linkedin'
                whileHover={{ scale: 1.2, color: '#0A66C2' }}
                transition={{ duration: 0.3 }}
              ></motion.i>
            </NavLink>
          </div>
          <div className='icon wp'>
            <NavLink to='https://wa.me/918788238470'>
              <motion.i
                className='fa-brands fa-whatsapp'
                whileHover={{ scale: 1.2, color: '#25D366' }}
                transition={{ duration: 0.3 }}
              ></motion.i>
            </NavLink>
          </div>
          <div className='icon git'>
            <NavLink to='https://github.com/AsifAbbasi11996/'>
              <motion.i
                className='fa-brands fa-github'
                whileHover={{ scale: 1.2, color: '#333' }}
                transition={{ duration: 0.3 }}
              ></motion.i>
            </NavLink>
          </div>
          <div className='icon mail'>
            <NavLink to='mailto:asifabbasi7666@gmail.com'>
              <motion.i
                className='fa-solid fa-square-envelope'
                whileHover={{ scale: 1.2, color: '#D44638' }}
                transition={{ duration: 0.3 }}
              ></motion.i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
