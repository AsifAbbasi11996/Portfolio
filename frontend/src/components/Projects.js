import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjects } from '../api/projectApi.js' // Import the getProjects API
import '../assets/css/Projects.css'
import { formatDate } from '../utils/formatDate.js'
import { formatImageUrl } from '../utils/formatImage.js'
import { truncateText } from '../utils/truncateText.js'

const Projects = () => {
  const [projects, setProjects] = useState([]) // Store fetched projects
  const [loading, setLoading] = useState(true) // Loading state

  // Fetch projects when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjects() // Fetch the projects from the API
        setProjects(fetchedProjects) // Store them in the state
        setLoading(false) // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching projects:', error)
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Show a loading state while data is being fetched
  if (loading) {
    return <div>Loading projects...</div>
  }

  return (
    <div className='projects-container'>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='text-projects'
      >
        PROJECTS
      </motion.h3>

      <div className='projects-grid'>
        {/* Dynamically render projects */}
        {projects.map(project => (
          <motion.div
            key={project._id}
            className='box'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className='projects'>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {project.projectName} ({formatDate(project.startDate)} -{' '}
                {project.endDate ? formatDate(project.endDate) : 'Present'})
              </motion.h3>

              <div className='projects-text'>
                <div className='image'>
                  {/* Use the formatImageUrl function to handle the image URL */}
                  <motion.img
                    src={formatImageUrl(project.projectImage)}
                    alt={project.projectName}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className='projects-description'>
                  <p>{truncateText(project.projectDescription)}</p>
                  <div className='stack'>
                    {/* Render the tech stack dynamically */}
                    {project.tech.map((tech, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                      >
                        {tech}
                      </motion.p>
                    ))}
                  </div>

                  <div className='link'>
                    <NavLink to={project.projectLink || '#'} target='_blank'>
                      Live Demo{' '}
                      <i className='fa-solid fa-up-right-from-square'></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects