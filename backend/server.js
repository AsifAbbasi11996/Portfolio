import express from 'express';
import sgMail from '@sendgrid/mail';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());

// SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Contact form POST route
app.post('/send-email', async (req, res) => {
    console.log(req.body);  // Log the form data

    const { name, email, subject, message } = req.body;

    const msg = {
        to: 'asifabbasi7666@gmail.com', // Replace with your email address
        from: 'your_sendgrid_verified_email@example.com', // Replace with a verified SendGrid email address
        subject: subject || 'No Subject',
        text: message,
        html: `<strong>${message}</strong>`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error from SendGrid:', error);
        res.status(500).send('Error sending email');
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
