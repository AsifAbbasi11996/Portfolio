import express from 'express'
import { addProject, deleteProjectById, getProjects, updateProjectById } from '../controllers/project.controller.js' // Import the addProject controller

const router = express.Router()

// Routes for projects
router.post('/add', addProject) // Add a new project
router.get('/all', getProjects) // Get all projects
router.put('/update/:id', updateProjectById) // Update project by ID
router.delete('/delete/:id', deleteProjectById) // Delete project by ID

export default router