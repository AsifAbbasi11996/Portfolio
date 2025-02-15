import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Typed from 'typed.js'
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
      strings: ['Web Developer.', 'MERN Stack Developer.','Full Stack Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
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
            <h1>
              Hi, I'm <span className='purple'> Asif Abbasi</span>{' '}
              <img className='hii' src={hii} alt='' />
              <br /> and I am a passionate <br />
            </h1>

            <span id='element'></span>

            <p>
              I specialize in building modern and scalable web applications
              using the latest technologies. <br />
              My expertise includes front-end and back-end development, creating
              seamless user experiences, and solving real-world problems.
            </p>
          </div>

          <div className='hero-pic'>
          </div>
        </div>

        <div className='button-tech'>
          <div className='buttons'>
            <NavLink
              to='https://drive.google.com/file/d/1EaL8zEz0hNJIkn3SDrwYlrqCzD-UEibL/view?usp=sharing'
              target='_blank'
            >
              <button>Download Resume</button>
            </NavLink>
            <NavLink to='/contact'>
              <button>Contact Me</button>
            </NavLink>
          </div>

          <div className='tech'>
            <h4>Tech Stack</h4>
            <div className='lang'>
              <div className='center'>
                <img src={javascript} alt='' />
                <img src={react} alt='' />
                <img src={node} alt='' />
                <img className='mongodb' src={mongodb} alt="" />
                <img className='tailwind' src={tailwindcss} alt='' />
                <i className='fa-brands fa-html5'></i>
                <i className='fa-brands fa-css3-alt'></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className='social_icons'>
          <div className='icon li'>
            <NavLink to='https://www.linkedin.com/in/asif-abbasi-42962a245'>
              <i className='fa-brands fa-linkedin'></i>
            </NavLink>
          </div>
          <div className='icon wp'>
            <NavLink to='https://wa.me/918788238470'>
              <i className='fa-brands fa-whatsapp'></i>
            </NavLink>
          </div>
          <div className='icon git'>
            <NavLink to='https://github.com/AsifAbbasi11996/'>
              <i className='fa-brands fa-github'></i>
            </NavLink>
          </div>
          <div className='icon mail'>
            <NavLink to='mailto:asifabbasi7666@gmail.com'>
              <i className='fa-solid fa-square-envelope'></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
