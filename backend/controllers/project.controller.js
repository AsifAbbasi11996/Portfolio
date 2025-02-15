import Project from '../models/projects.model.js'
import upload from '../middleware/multer.js' // Import multer configuration

// Add project with image upload
export const addProject = async (req, res) => {
  try {
    // Use multer to handle the single file upload
    upload.single('projectImage')(req, res, async err => {
      if (err) {
        // Handle Multer-specific errors
        return res.status(400).json({ message: err.message })
      }

      const {
        projectName,
        projectDescription,
        projectLink,
        tech, // tech will be a string (e.g., "React.js, Framer-motion")
        startDate,
        endDate
      } = req.body

      // Split the tech field into an array (by commas), trimming any extra spaces
      let techArray = []
      if (tech) {
        techArray = tech.split(',').map(techItem => techItem.trim())
      }

      // Check if the image is uploaded, and create the image path
      let projectImage = ''
      if (req.file) {
        projectImage = `/uploads/projects/${req.file.filename}`
      }

      // Create a new project document
      const newProject = new Project({
        projectName,
        projectDescription,
        projectLink,
        tech: techArray, // Store tech as an array of strings
        startDate,
        endDate,
        projectImage // Add the image path to the project data
      })

      // Save the project in the database
      await newProject.save()

      // Send a response to the client
      res
        .status(201)
        .json({ message: 'Project added successfully', project: newProject })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// get all projects
export const getProjects = async (req, res) => {
  try {
    const project = await Project.find().sort({ createdAt: -1 })
    res.status(200).json(project)
  } catch (error) {
    console.error('Error fetching project', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Update project by ID
export const updateProjectById = async (req, res) => {
  const { id } = req.params // Get the project ID from the URL params
  try {
    // Find the project by ID
    let project = await Project.findById(id)
    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }

    // Use multer to handle the single file upload (if there is a new image)
    upload.single('projectImage')(req, res, async err => {
      if (err) {
        return res.status(400).json({ message: err.message })
      }

      const {
        projectName,
        projectDescription,
        projectLink,
        tech,
        startDate,
        endDate
      } = req.body

      // Split the tech field into an array (by commas), trimming any extra spaces
      let techArray = []
      if (tech) {
        techArray = tech.split(',').map(techItem => techItem.trim())
      }

      // Check if a new image was uploaded and update the project image path if needed
      let projectImage = project.projectImage // Keep the existing image if none is uploaded
      if (req.file) {
        projectImage = `/uploads/projects/${req.file.filename}`
      }

      // Update the project fields
      project.projectName = projectName || project.projectName
      project.projectDescription =
        projectDescription || project.projectDescription
      project.projectLink = projectLink || project.projectLink
      project.tech = techArray.length > 0 ? techArray : project.tech
      project.startDate = startDate || project.startDate
      project.endDate = endDate || project.endDate
      project.projectImage = projectImage

      // Save the updated project
      await project.save()

      res.status(200).json({ message: 'Project updated successfully', project })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// Delete project by ID
export const deleteProjectById = async (req, res) => {
  const { id } = req.params // Get the project ID from the URL params
  try {
    // Find and delete the project by ID
    const project = await Project.findByIdAndDelete(id)

    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }

    res.status(200).json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}
