import { API_URL } from './baseUrl'

export const formatImageUrl = imagePath => {
  if (!imagePath || typeof imagePath !== 'string') {
    console.warn('Invalid image path:', imagePath) // Log invalid path for debugging
    return '/default-image.jpg' // Fallback image if path is invalid
  }

  // Normalize backslashes to forward slashes for URL compatibility (Windows-style paths)
  const formattedPath = imagePath.replace(/\\/g, '/')

  // Ensure that there is no extra slash between API_URL and the image path
  return `${API_URL.replace(/\/$/, '')}/${formattedPath.replace(/^\//, '')}`
}
