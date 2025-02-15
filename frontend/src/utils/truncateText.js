// utils/truncateText.js

export const truncateText = (text, wordLimit = 25) => {
  if (!text || typeof text !== 'string') return '' // Handle invalid text input

  // Split the text into an array of words
  const words = text.split(' ')

  // If the word count exceeds the limit, truncate the text
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...'
  }

  // If it's already within the word limit, return the text as is
  return text
}
