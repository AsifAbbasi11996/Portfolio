import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Projects.css'

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h3 className="text-projects">PROJECTS</h3>

        <div className="projects-grid">

          <div className="box">
            <div className="inventory-management">
              <h3>Inventory Management System (Personal Project)</h3>
              <div className="inventory-text col-3">
                <p>
                  Built a MERN stack system for inventory management with features like barcode scanning, stock tracking, and order history analysis.
                </p>
                <div className="stack">
                  <p>React.js</p>
                  <p>Node.js</p>
                  <p>MongoDB</p>
                </div>

                <div className="link">
                  <NavLink to="https://nbeer.shop" target="_blank">Live Demo <i className="fa-solid fa-up-right-from-square"></i></NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="gemstore">
              <h3>Gemstore (10/2024 - Present)</h3>
              <div className="portfolio-text col-3">
                <p>
                  Developed an e-commerce platform with React.js, Node.js, and MongoDB. Integrated features like user authentication, product catalog, shopping cart, and secure payment processing.
                </p>
                <div className="stack">
                  <p>React.js</p>
                  <p>Node.js</p>
                  <p>MongoDB</p>
                </div>

                <div className="link">
                  <NavLink to="">Live Demo <i className="fa-solid fa-up-right-from-square"></i></NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="north-kyoto">
              <h3>North Kyoto Website (08/2024 - 10/2024)</h3>
              <div className="north-kyoto-text col-3">
                <p>
                  Developed a full e-commerce platform with React.js, Node.js, and MongoDB. Integrated cart management, wishlist, and payment processing for a smooth user experience.
                </p>
                <div className="stack">
                  <p>React.js</p>
                  <p>Node.js</p>
                  <p>MongoDB</p>
                </div>

                <div className="link">
                  <NavLink to="">Live Demo <i className="fa-solid fa-up-right-from-square"></i></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
