import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true // Makes sure project name is always provided
    },
    projectDescription: {
      type: String,
      required: true // Makes sure description is provided
    },
    projectImage: {
      type: String,
      required: false // Optional: for project images
    },
    projectLink: {
      type: String,
      required: false // Optional: for live project link
    },
    tech: {
      type: [String],
      required: true // Makes sure tech stack is provided
    },
    startDate: {
      type: Date,
      required: true // You can make this required to mark when the project began
    },
    endDate: {
      type: Date,
      required: false // You can leave this empty if the project is still ongoing
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
)

const Project = mongoose.model('Project', projectSchema)

export default Project
