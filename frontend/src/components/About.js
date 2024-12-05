import React from 'react'
import '../assets/css/About.css'
import myPic from '../assets/images/IMG_20230111_155709_123.jpg'

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about">
                    <div className="img">
                        <img src={myPic} alt="Asif Abbasi" />
                        <p>
                            Hi, I'm Asif Abbasi, a passionate MERN Stack Developer based in India.
                        </p>
                        <p> I hold a Bachelor's degree in Computer Science and have honed my skills in front-end and back-end technologies such as React.js, Node.js, JavaScript, HTML/CSS, and MongoDB.
                        </p>
                        <p>
                            I enjoy tackling coding challenges and creating user-friendly applications. With hands-on experience in building scalable, dynamic web apps, I am committed to writing clean, maintainable code and continuously improving my technical skills.
                        </p>
                    </div>

                    <div className="About-text">
                        <h3 className="text-about">ABOUT ME</h3>
                        <h3>A Passionate MERN Stack Developer 📍</h3>

                        <h3>Work Experience</h3>

                        <div className='about-job'>
                            <p><strong>Web Developer</strong> | RDIGI WORKS <br /> November 2024, Bhayandar, Maharashtra</p>
                            <ul>
                                <li>Developed dynamic web apps using Node.js and MongoDB, enhancing backend functionality.</li>
                                <li>Collaborated with frontend teams to integrate RESTful APIs for seamless data flow.</li>
                                <li>Conducted testing and debugging to ensure optimal web application performance.</li>
                            </ul>
                        </div>

                        <div className='about-job'>
                            <p><strong>Web Developer Intern</strong> | RDIGI WORKS <br /> August 2024 - October 2024, Bhayandar, Maharashtra</p>
                            <ul>
                                <li>Developed web apps with Node.js and MongoDB, improving backend systems.</li>
                                <li>Worked alongside frontend developers to integrate APIs and enhance app functionality.</li>
                                <li>Ensured web application reliability through extensive testing and debugging.</li>
                            </ul>
                        </div>

                        <div className='about-job'>
                            <p><strong>Front End Developer Intern</strong> | Codify Institute <br /> May 2024 - July 2024, Virar, Maharashtra</p>
                            <ul>
                                <li>Contributed to web app development using React.js, enhancing performance and UX.</li>
                                <li>Collaborated with UX/UI designers to implement responsive and cross-browser designs.</li>
                                <li>Integrated RESTful APIs and maintained version control with Git.</li>
                            </ul>
                        </div>

                        <p>Thank you for visiting my portfolio! ☺️</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About
