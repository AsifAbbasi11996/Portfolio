import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../assets/css/Contact.css'
import { IoIosSend } from 'react-icons/io'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const sendEmail = e => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('') // Reset status message before submitting

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY
        }
      )
      .then(
        () => {
          setStatusMessage(
            'Thank you for reaching out! We will get back to you soon.'
          )
          // Hide the status message after 3 seconds
          setTimeout(() => {
            setStatusMessage('')
          }, 3000)
          setIsSubmitting(false)
          setFormData({ name: '', email: '', message: '' }) // Reset form
        },
        error => {
          setStatusMessage('Something went wrong. Please try again later.')
          setIsSubmitting(false)
        }
      )
  }

  return (
    <div className='contact-container'>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='text-contact'
      >
        CONTACT
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Don't be shy! Hit me up! 👇
      </motion.h3>

      {/* Contact Form Section */}
      <motion.div
        className='contact-form'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className='two'>
            {/* Name Input */}
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your Name'
                required
              />
            </div>

            {/* Email Input */}
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Your Email'
                required
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your Message'
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type='submit'
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <IoIosSend /> {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>

        {/* Status Message */}
        {statusMessage && <p className='message'>{statusMessage}</p>}
      </motion.div>

      {/* Social Media Links Section */}
      <div className='icons'>
        <div className='icon li'>
          <NavLink to='https://www.linkedin.com/in/asif-abbasi-42962a245'>
            <motion.i
              className='fa-brands fa-linkedin'
              whileHover={{ scale: 1.1, color: '#0a66c2' }}
              transition={{ duration: 0.3 }}
            />
            <span>LinkedIn</span>
          </NavLink>
        </div>
        <div className='icon wp'>
          <NavLink to='https://wa.me/918788238470'>
            <motion.i
              className='fa-brands fa-whatsapp'
              whileHover={{ scale: 1.1, color: 'rgb(67, 216, 84)' }}
              transition={{ duration: 0.3 }}
            />
            <span>WhatsApp</span>
          </NavLink>
        </div>
        <div className='icon git'>
          <NavLink to='https://github.com/AsifAbbasi11996/'>
            <motion.i
              className='fa-brands fa-github'
              whileHover={{ scale: 1.1, color: 'black' }}
              transition={{ duration: 0.3 }}
            />
            <span>GitHub</span>
          </NavLink>
        </div>
        <div className='icon mail'>
          <NavLink to='mailto:asifabbasi7666@gmail.com'>
            <motion.i
              className='fa-solid fa-square-envelope'
              whileHover={{ scale: 1.1, color: '#4285f4' }}
              transition={{ duration: 0.3 }}
            />
            <span>Email</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Contact
