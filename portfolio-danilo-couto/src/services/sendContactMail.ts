export const sendContactMail = async (contact: Object) => {
  try {
    return await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    // console.log({ error });
    return error;
  }
};
