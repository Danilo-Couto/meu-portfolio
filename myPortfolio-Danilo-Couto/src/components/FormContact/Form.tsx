import { useState } from 'react';
import toast from 'react-hot-toast';
import theme from '../../styles/theme';
import { SFormContainer, SInput, STextArea } from './styles';
// import { sendContactMail } from '../../services/sendMail';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !message) {
      toast('Fill in all the fields!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      // await sendContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');

      toast('Message sent!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Erro to send message. Try again!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <SFormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <SInput
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <SInput
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <STextArea
        placeholder="Message"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button type="submit" disabled={loading}>
        SEND
      </button>
    </SFormContainer>
  );
}
