import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './database/db.js'
import projectRoutes from './routes/project.route.js'

dotenv.config()

const app = express()

// Enable CORS
app.use(cors())
// Middleware
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.use('/uploads', express.static('uploads'));

// Routes
app.use('/project', projectRoutes)


// Connect to database
connectDB()

app.get('/api', (req, res) => {
  res.send('API is running')
})


// Server Listening
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
