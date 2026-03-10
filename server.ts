import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Check if credentials are set
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASS;

      if (!user || !pass) {
        console.warn('SMTP credentials missing in environment. Logging message to console instead of sending email.');
        console.log(`\n--- New Message ---\nFrom: ${name} (${email})\nMessage: ${message}\n-------------------\n`);
        return res.json({ success: true, message: 'Message logged locally (SMTP not configured)' });
      }

      // Configure transporter using the 'gmail' service shortcut
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: user,
          pass: pass,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'ayushsri2812@gmail.com',
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email
      };

      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully from ${email} to ayushsri2812@gmail.com`);
      res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error: any) {
      console.error('Nodemailer Error:', error);
      
      let clientMessage = 'Failed to send message. Please try again later.';
      if (error.code === 'EAUTH') {
        clientMessage = 'Authentication failed: Please check if your SMTP_USER and SMTP_PASS (App Password) are correct in the Secrets panel.';
      } else if (error.code === 'ESOCKET') {
        clientMessage = 'Network error: Could not connect to Gmail servers.';
      }

      res.status(500).json({ error: clientMessage });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
