import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Back to the Top
        </button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/Danilo-Couto/')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/danilocouto/')
            }
          />
          <AiOutlineInstagram
            onClick={() => handleRedirect('https://instagram.com/danilo_couto')}
          />
          <AiOutlineYoutube
            onClick={() =>
              handleRedirect('https://www.youtube.com/motoemochilabrasil')
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
