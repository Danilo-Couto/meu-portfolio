/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer } from './styles';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src="/eu_e_um_brotossauro.jpg" alt="Eu no Alasca" />
      {/* <p className="font-mono"> That's me in Alaska</p> */}
      <div>
        <TextContainer>
          <h1>Olá, eu sou o Danilo!</h1>
          <h2>
            Bem vindo ao meu sempre em construção <b> porfólio </b>
          </h2>
          <div>
            <button type="button">
              <a href="/sobre">+ sobre mim</a>
            </button>
            <button
              type="button"
              onClick={() =>
                window.open('https://www.linkedin.com/in/danilocouto/')
              }
            >
              LINKEDIN
            </button>
            <button
              type="button"
              onClick={() => window.open('https://github.com/Danilo-Couto/')}
            >
              GITHUB
            </button>
          </div>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
