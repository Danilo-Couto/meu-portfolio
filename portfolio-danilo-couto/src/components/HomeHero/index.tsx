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
          <button type="button">
            <a href="/sobre">Conheça-me</a>
          </button>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
