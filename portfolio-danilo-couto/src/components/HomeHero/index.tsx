/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer } from './styles';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src="/eu.png" alt="Eu no Alasca" />
      {/* <p className="font-mono"> That's me in Alaska</p> */}
      <div>
        <TextContainer>
          <h1>Hi, there!</h1>
          <h2>{'{'}</h2>
          <h2>
            myName: <b> Danilo Couto</b>,
          </h2>
          {/* <h2>
            actualPosition: <b>Software Enginer Student</b>
          </h2> */}
          <h2>
            at: <b>Trybe</b>
          </h2>
          <h2>{'}'}</h2>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
