import axios from 'axios'
import { API_URL } from '../utils/baseUrl'

// Add a new project
export const addProject = async (projectData, imageData) => {
  try {
    const formData = new FormData()
    // Append project data
    formData.append('projectName', projectData.projectName)
    formData.append('projectDescription', projectData.projectDescription)
    formData.append('projectLink', projectData.projectLink)
    formData.append('tech', projectData.tech.join(',')) // Assuming tech is an array
    formData.append('startDate', projectData.startDate)
    formData.append('endDate', projectData.endDate)

    // Append image if available
    if (imageData) {
      formData.append('projectImage', imageData)
    }

    const response = await axios.post(`${API_URL}project/add`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return response.data // Return the response from the server
  } catch (error) {
    console.error('Error adding project:', error)
    throw error
  }
}

// Get all projects
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}project/all`)
    return response.data
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw error
  }
}

// Update a project by ID
export const updateProject = async (id, projectData, imageData) => {
  try {
    const formData = new FormData()
    // Append updated project data
    formData.append('projectName', projectData.projectName)
    formData.append('projectDescription', projectData.projectDescription)
    formData.append('projectLink', projectData.projectLink)
    formData.append('tech', projectData.tech.join(','))
    formData.append('startDate', projectData.startDate)
    formData.append('endDate', projectData.endDate)

    // Append new image if available
    if (imageData) {
      formData.append('projectImage', imageData)
    }

    const response = await axios.put(`${API_URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return response.data // Return the updated project data
  } catch (error) {
    console.error('Error updating project:', error)
    throw error
  }
}

// Delete a project by ID
export const deleteProject = async id => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data // Return the deletion confirmation
  } catch (error) {
    console.error('Error deleting project:', error)
    throw error
  }
}
