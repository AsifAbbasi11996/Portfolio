import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to MongoDB....')
  } catch (error) {
    console.error('Failed to connect to MongoDB : ', error.message)
    process.exit(1) // Exit process with failure
  }
}

export default connectDB
