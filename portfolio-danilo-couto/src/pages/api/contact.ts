import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { Options } from 'nodemailer/lib/mailer';

require('dotenv').config();

const { OAuth2 } = google.auth;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject('Failed to create access token :(');
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });

  return transporter;
};

const sendEmail = async (emailOptions: Options) => {
  const emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

export default async (req, res) => {
  const { senderMail, name, text } = req.body;

  const from = `${name} <${senderMail}>`;
  const message = {
    from,
    to: process.env.GMAIL,
    subject: `Nova mensagem de contato - ${name}`,
    text,
    replyTo: from
  };

  if (senderMail === '' || name === '' || text === '') {
    res.status(403).send();
    return;
  }

  const mailerRes = await sendEmail({
    subject: message.subject,
    text,
    to: message.to,
    from: message.from
  });
  res.send(mailerRes);
};
