import userData from '../../assets/data';
import ExperienciaCard from '../../components/ExperienciaCard';
import HeadComponent from '../../components/Head';
import Header from '../../components/Header';
import { AboutContainer } from '../../styles/AboutStyles';

export default function About({ changeMode }) {
  return (
    <AboutContainer>
      <HeadComponent />
      <Header changeMode={changeMode} />
      {/* COLOCAR VARIAS FOTOS MINHAS */}
      {/* <Experiencias /> */}
      {userData.experience.length > 0 && (
        <div className="timeline-container">
          {userData.experience.map((data, i) => (
            <ExperienciaCard data={data} key={i} />
          ))}
        </div>
      )}
    </AboutContainer>
  );
}
