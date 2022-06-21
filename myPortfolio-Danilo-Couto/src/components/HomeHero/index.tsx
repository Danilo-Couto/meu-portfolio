import { STextContainer, SInfosContainer, SContainer } from 'src/components/HomeHero/styles';
import picture from '../../../public/pessoa.webp';

export default function HomeHero() {
  return (
    <SContainer data-aos="fade-up">
      <img src={picture} alt="Eu no Alasca" />
      {/* // colocar uma setinha pra dar graca */}
      <div>
        <STextContainer>
          <h1>Hi, there!</h1>
          <h2>{'{'}</h2>
          <h2>
            myName: <b> Danilo Couto</b>,
          </h2>
          <h2>
            actualPosition: <b>Software Enginer Student</b>
          </h2>
          <h2>
            at: <b>Trybe</b>
          </h2>
          <h2>{'}'}</h2>
        </STextContainer>
        <SInfosContainer>
          {/* <SCodeItem data-aos="zoom-in">
            <span>{presentation}</span>
          </SCodeItem> */}
        </SInfosContainer>
      </div>
    </SContainer>
  );
}
