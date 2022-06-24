import Head from 'next/head';
import userData from '../../assets/data';
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
      <Head>
        <title>Sobre Mim | Danilo Couto</title>
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
      <Header />
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
