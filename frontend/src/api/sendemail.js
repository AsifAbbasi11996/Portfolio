const sendEmail = async (formData) => {
    try {
        const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            return { success: true, message: 'Email sent successfully!' };
        } else {
            return { success: false, message: data.message || 'Error sending message' };
        }
    } catch (error) {
        return { success: false, message: 'Network error, try again later.' };
    }
};

export default sendEmail