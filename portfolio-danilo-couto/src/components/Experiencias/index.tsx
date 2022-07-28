import { Container, TextContainer } from './styles';

function Experiencias() {
  return (
    <Container data-aos="fade-up">
      <img src="/eu.png" alt="Eu no Alasca" />
      {/* <p className="font-mono"> That's me in Alaska</p> */}
      <div>
        <TextContainer>
          <p>Danilo Couto</p>
          <p>Atualmente em busca da minha 1a oportunidade com dev</p>
          <p>Um pouco da minha história abaixo</p>
        </TextContainer>
      </div>
      <section>
        {/* <a href={myCV} target="_blank" rel="noreferrer">
          <ExperienciaItem
            year="Veja meu CV"
            title="Meu histórico profissional"
            description="antes de virar programador"
          />
        </a>
        <p>{mYDescription}</p> */}
      </section>
    </Container>
  );
}

export default Experiencias;
