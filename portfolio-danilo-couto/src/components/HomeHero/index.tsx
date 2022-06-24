/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer } from './styles';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src="/eu.png" alt="Eu no Alasca" />
      {/* <p className="font-mono"> That's me in Alaska</p> */}
      <div>
        <TextContainer>
          <h1>Olá, eu sou o Danilo!</h1>
          <h2>Bem vindo, ao meu porfólio</h2>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
