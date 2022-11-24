/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer } from './styles';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <div>
        <img src="/eu.png" alt="Eu no Alasca" />
        <p> That's me in Alaska ⤴</p>
      </div>
      <TextContainer>
        <h1>Olá, eu sou Danilo Couto!</h1>
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
    </Container>
  );
}

export default HomeHero;
