import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
      <h3 className='text-projects'>PROJECTS</h3>

      <div className='projects-grid'>
        {/* Dynamically render projects */}
        {projects.map(project => (
          <div key={project._id} className='box'>
            <div className='projects'>
              <h3>
                {project.projectName} ({formatDate(project.startDate)} -{' '}
                {project.endDate ? formatDate(project.endDate) : 'Present'})
              </h3>

              <div className='projects-text'>
                <div className='image'>
                  {/* Use the formatImageUrl function to handle the image URL */}
                  <img
                    src={formatImageUrl(project.projectImage)}
                    alt={project.projectName}
                  />
                </div>
                <div className='projects-description'>
                  <p>{truncateText(project.projectDescription)}</p>
                  <div className='stack'>
                    {/* Render the tech stack dynamically */}
                    {project.tech.map((tech, index) => (
                      <p key={index}>{tech}</p>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
