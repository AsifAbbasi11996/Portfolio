import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import { addProject } from '../api/projectApi.js' // Assuming addProject API is located here
import '../assets/css/AddProject.css'

const AddProject = () => {
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [tech, setTech] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [projectImage, setProjectImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate() // useNavigate hook to handle navigation

  const handleImageChange = e => {
    const file = e.target.files[0]
    if (file) {
      setProjectImage(file)
    }
  }

  const handleTechChange = e => {
    setTech(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Form validation
    if (!projectName || !projectDescription || !tech || !startDate) {
      setError('Please fill out all required fields.')
      return
    }

    setLoading(true)
    setError('')

    const projectData = {
      projectName,
      projectDescription,
      projectLink,
      tech: tech.split(','), // Convert comma-separated tech string into an array
      startDate,
      endDate
    }

    try {
      await addProject(projectData, projectImage) // Call the API to add the project
      setLoading(false)
      navigate('/projects') // Navigate to the projects list page after success
    } catch (err) {
      setLoading(false)
      setError('Error adding project. Please try again later.')
    }
  }

  return (
    <div className='add-project-container'>
      <h3>Add New Project</h3>
      {error && <p className='error'>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='projectName'>Project Name :</label>
          <input
            type='text'
            id='projectName'
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            required
          />
        </div>

        <div className='form-group description'>
          <label htmlFor='projectDescription'>Project Description :</label>
          <textarea
            id='projectDescription'
            value={projectDescription}
            onChange={e => setProjectDescription(e.target.value)}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='projectLink'>Project Link :</label>
          <input
            type='url'
            id='projectLink'
            value={projectLink}
            onChange={e => setProjectLink(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='tech'>Tech Stack (comma separated) :</label>
          <input
            type='text'
            id='tech'
            value={tech}
            onChange={handleTechChange}
            required
          />
        </div>

        <div className='two'>
          <div className='form-group'>
            <label htmlFor='startDate'>Start Date :</label>
            <input
              type='date'
              id='startDate'
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='endDate'>End Date (Optional) :</label>
            <input
              type='date'
              id='endDate'
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor='projectImage'>Upload Project Image :</label>
          <input type='file' id='projectImage' onChange={handleImageChange} />
        </div>

        <div>
          <button type='submit' disabled={loading}>
            {loading ? 'Adding Project...' : 'Add Project'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProject
