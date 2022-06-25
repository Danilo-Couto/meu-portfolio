/* eslint-disable no-console */
import axios from 'axios';

export const sendContactMail = async (
  name: string,
  senderMail: string,
  text: string
) => {
  const data = {
    name,
    senderMail,
    text
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    console.log({ error });
    return error;
  }
};
