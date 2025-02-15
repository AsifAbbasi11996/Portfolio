import React from 'react'
import '../assets/css/About.css'
import mern from '../assets/images/mern.png'
import developer from '../assets/images/developer.webp'

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about'>
          <div className='About-text'>
            <h3 className='text-about'>ABOUT ME</h3>
            <h3>A Passionate MERN Stack Developer 📍</h3>

            <h3>Work Experience</h3>

            <div className='about-job'>
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
            </div>
            <div className='image'>
              <img src={mern} />
            </div>
          </div>

          <div className='img'>
            <img src={developer} />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
