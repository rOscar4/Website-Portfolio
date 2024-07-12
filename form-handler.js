const nodemailer = require('nodemailer');

// Replace these with your email service details
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',  // Replace with your SMTP server hostname
  port: 587,                 // Replace with your SMTP server port
  secure: false,             // Set to true if your server uses TLS
  auth: {
    user: 'your_email@example.com',  // Replace with your email address
    pass: 'your_password'           // Replace with your email password
  }
});

// This is a dummy function to simulate form data access (replace with your actual logic)
function getFormData() {
  return {
    senderEmail: 'sender@example.com',
    recipientEmail: 'recipient@example.com',
    subject: 'Form Submission',
    message: 'This is a message from the form.'
  };
}

const sendEmail = async (formData) => {
  try {
    const mailOptions = {
      from: formData.senderEmail,
      to: formData.recipientEmail,
      subject: formData.subject,
      text: formData.message  // You can also use HTML for email content
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Simulate form submission by calling the sendEmail function with dummy data
const formData = getFormData();
sendEmail(formData);