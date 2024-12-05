import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Typed from 'typed.js'
import '../assets/css/Home.css'
import hii from '../assets/images/hii.png'
import myPic from '../assets/images/IMG_20230111_155709_123.jpg'
import javascript from '../assets/images/js.png'
import react from '../assets/images/react.png'
import node from '../assets/images/nodejs.png'
// import mongodb from '../assets/images/mongodb.png'
import tailwindcss from '../assets/images/tailwindcss.png'

const Home = () => {

    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['Web Developer.', 'MERN Stack Developer.'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <>
            <div className="home-container">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1>Hi, I'm <span className="purple"> Asif Abbasi</span> <img className="hii"
                            src={hii} alt="" /><br /> and I am a passionate <br /></h1>

                        <span id="element"></span>

                        {/* <p>I have done my Bachelor's of Science degree with a specialization <br /> in Computer Science
                            from Thakur Ramnarayan College.</p> */}

                        <p>
                            I specialize in building modern and scalable web applications using the latest technologies. <br />
                            My expertise includes front-end and back-end development, creating seamless user experiences, and solving real-world problems.
                        </p>
                    </div>

                    <div className="hero-pic"><img src={myPic} alt="" /></div>
                </div>

                <div className="button-tech">
                    <div className="buttons">
                        <NavLink to="https://drive.google.com/file/d/1fL5cDncBQJU7npWvn-WnBIx3PDI7odIP/view?usp=sharing"
                            target="_blank">
                            <button>Download Resume</button></NavLink>
                        <NavLink to="/contact">
                            <button>Contact Me</button></NavLink>
                    </div>

                    <div className="tech">
                        <h4>Tech Stack</h4>
                        <div className="lang">
                            <div className="center">
                                <img src={javascript} alt="" />
                                <img src={react} alt="" />
                                <img src={node} alt="" />
                                {/* <img className='mongodb' src={mongodb} alt="" /> */}
                                <img className="tailwind" src={tailwindcss} alt="" />
                                <i className="fa-brands fa-bootstrap"></i>
                                <i className="fa-brands fa-html5"></i>
                                <i className="fa-brands fa-css3-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home 
