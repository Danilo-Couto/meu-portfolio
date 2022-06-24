import Head from 'next/head';
import userData from '../../assets/data';
import Experiencias from '../../components/Experiencias';
import Header from '../../components/Header';
import { AboutContainer } from '../../styles/AboutStyles';

const ExperienceCard = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <time>{data.year}</time>
      <h1>{data.title}</h1>
      <h2>{data.company}</h2>
      <p>{data.desc}</p>
      <span className="circle" />
    </div>
  </div>
);

export default function About({ changeMode }) {
  return (
    <AboutContainer>
      <Head>
        <title>Sobre Danilo Couto</title>
        <meta
          name="description"
          content="Sou estudante full stack na Trybe com uma trajetória de vida diferente!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou estudante full stack na Trybe com uma trajetória de vida diferente"
        />
      </Head>
      <Header changeMode={changeMode} />
      {/* COLOCAR VARIAS FOTOS MINHAS */}
      <Experiencias />
      {userData.experience.length > 0 && (
        <div className="timeline-container">
          {userData.experience.map((data, i) => (
            <ExperienceCard data={data} key={i} />
          ))}
        </div>
      )}
    </AboutContainer>
  );
}
