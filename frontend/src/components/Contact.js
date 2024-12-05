import React, { useState } from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import sendEmail from '../api/sendemail.js'; 
import '../assets/css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(''); // Reset status message before submitting

    const result = await sendEmail(formData);  // Call sendEmail utility

    if (result.success) {
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });  // Reset form
    } else {
      setStatusMessage(result.message || 'Something went wrong!');
    }

    setIsSubmitting(false);  // Reset submitting state
  };

  return (
    <>
      <div className="contact-container">
        <h3 className="text-contact">CONTACT</h3>
        <h3>Don't be shy! Hit me up! 👇</h3>

        {/* Contact Form Section */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <div className="two">
              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (Optional)"
              />
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Status Message */}
          {statusMessage && <p>{statusMessage}</p>}
        </div>

        {/* Social Media Links Section */}
        <div className="icons">
          <div className="icon li">
            <NavLink to="https://www.linkedin.com/in/asif-abbasi-42962a245">
              <i className="fa-brands fa-linkedin"></i><span>LinkedIn</span>
            </NavLink>
          </div>
          <div className="icon wp">
            <NavLink to="https://wa.me/918788238470">
              <i className="fa-brands fa-whatsapp"></i><span>WhatsApp</span>
            </NavLink>
          </div>
          <div className="icon git">
            <NavLink to="https://github.com/AsifAbbasi11996/">
              <i className="fa-brands fa-github"></i><span>GitHub</span>
            </NavLink>
          </div>
          <div className="icon mail">
            <NavLink to="mailto:asifabbasi7666@gmail.com">
              <i className="fa-solid fa-square-envelope"></i><span>Email</span>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
