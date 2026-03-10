import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      console.warn('SMTP credentials missing in environment. Logging message to console instead of sending email.');
      console.log(`\n--- New Message ---\nFrom: ${name} (${email})\nMessage: ${message}\n-------------------\n`);
      return res.status(200).json({ success: true, message: 'Message logged locally (SMTP not configured)' });
    }

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
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    
    let clientMessage = 'Failed to send message. Please try again later.';
    if (error.code === 'EAUTH') {
      clientMessage = 'Authentication failed: Please check if your SMTP_USER and SMTP_PASS (App Password) are correct in the Vercel Environment Variables.';
    } else if (error.code === 'ESOCKET') {
      clientMessage = 'Network error: Could not connect to Gmail servers.';
    }

    return res.status(500).json({ error: clientMessage });
  }
}
