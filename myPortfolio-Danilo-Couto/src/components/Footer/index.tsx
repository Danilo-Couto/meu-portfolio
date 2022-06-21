import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { SContainer } from './styles';

export default function Footer() {
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
    <SContainer>
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
        </section>
      </div>
    </SContainer>
  );
}
