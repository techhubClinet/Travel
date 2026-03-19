import { Router } from 'express';
import nodemailer from 'nodemailer';
import { config } from '../config.js';
import { getContactEmailHtml } from '../templates/contactEmail.js';

const router = Router();

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

router.post('/contact', async (req, res, next) => {
  try {
    const { name, email, company, serviceType, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        error: 'Name, email, and message are required.',
      });
    }

    const subject = `BioCare Express Contact: ${serviceType || 'general inquiry'}`;
    const textBody = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      company?.trim() ? `Company: ${company.trim()}` : null,
      `Service type: ${serviceType || 'general'}`,
      '',
      'Message:',
      message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    const htmlBody = getContactEmailHtml({
      name: name.trim(),
      email: email.trim(),
      company: company?.trim(),
      serviceType: serviceType || 'general',
      message: message.trim(),
    });

    await transporter.sendMail({
      from: config.smtp.from,
      to: config.smtp.to,
      replyTo: email.trim(),
      subject,
      text: textBody,
      html: htmlBody,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    next(err);
  }
});

export default router;
