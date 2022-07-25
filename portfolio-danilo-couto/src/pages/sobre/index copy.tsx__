import Head from 'next/head';
import userData from '../../assets/data';
import HeadComponent from '../../components/Head';
import Header from '../../components/Header';
import { AboutContainer, ItemCard } from '../../styles/AboutStyles';

const ExperienceCard = ({ title, desc, year, company, companyLink }) => (
  <ItemCard>
    <h1>{year}</h1>
    <h2>{title}</h2>
    <a href={companyLink}>{company}</a>
    <p>{desc}</p>
  </ItemCard>
);

export default function About() {
  return (
    <AboutContainer>
      <HeadComponent />
      <Header changeMode={undefined} />
      <h1>Trajetoria</h1>
      <main>
        {userData.experience.map((exp, index) => (
          <>
            <ExperienceCard
              key={index}
              title={exp.title}
              desc={exp.desc}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
          </>
        ))}
      </main>
    </AboutContainer>
  );
}
