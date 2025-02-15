import multer from 'multer'
import path from 'path'

// Define the storage configuration for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the directory where images will be stored
    cb(null, 'uploads/projects') // The 'uploads/projects' directory will be used to store the images
  },
  filename: (req, file, cb) => {
    // Generate a unique filename based on the current timestamp and original file extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
    )
  }
})

// Initialize multer with the storage configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
  fileFilter: (req, file, cb) => {
    // Allow only image files (jpg, jpeg, png)
    const allowedTypes = /jpeg|jpg|png/
    const mimeType = allowedTypes.test(file.mimetype)
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    )

    if (mimeType && extname) {
      return cb(null, true)
    } else {
      return cb(
        new Error('Only image files (jpg, jpeg, png) are allowed'),
        false
      )
    }
  }
})

export default upload
