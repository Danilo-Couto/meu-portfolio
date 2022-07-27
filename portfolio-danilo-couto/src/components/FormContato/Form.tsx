import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendContactMail';
import { theme } from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

interface IEvent {
  target: { name: any; value: any };
}

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Contato do meu Portfólio',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: process.env.EMAIL_API_KEY
  });

  const handleChange = (e: IEvent) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactMail(contact);

      toast('Obrigado pela mensagem! Em breve, responderei.', {
        style: {
          background: theme.text,
          color: theme.border
        }
      });
    } catch (error) {
      toast(
        'Ocorreu um erro. Tente diretamente pelo danilocoutodev@gmail.com',
        {
          style: {
            background: theme.error,
            color: '#fff'
          }
        }
      );
    } finally {
      setLoading(false);
      setContact({
        ...contact,
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <FormContainer
      data-aos="fade-up"
      action="https://api.staticforms.xyz/submit"
      method="post"
      onSubmit={handleSubmit}
    >
      <Input
        className="input"
        type="text"
        placeholder="Name"
        name="name"
        value={contact.name}
        onChange={handleChange}
        required
      />
      <Input
        className="input"
        type="email"
        placeholder="Email"
        name="email"
        value={contact.email}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="honeypot"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <TextArea
        className="textarea"
        placeholder="Your Message"
        name="message"
        value={contact.message}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
};

export default Form;
