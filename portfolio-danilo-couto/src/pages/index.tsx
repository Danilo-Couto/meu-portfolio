import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import ProjetosHome from '../components/ProjetosHome';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import { client } from '../services/prismic';
import 'aos/dist/aos.css';
import { IProjetosProps } from '../interface';
import LoadingScreen from '../components/LoadingScreen';
import userData from '../assets/data';
import HeadComponent from '../components/Head';
import { HomeContainer } from '../styles/HomeContainer';

export default function Home({ projetos, changeMode }: IProjetosProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const router = useRouter();
  if (router.isFallback) return <LoadingScreen />;
  return (
    <HomeContainer>
      <HeadComponent />
      <Header changeMode={changeMode} />
      <main className="home_container">
        <HomeHero />
        <ProjetosHome projetos={projetos} />
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await client.query(
    [Prismic.Predicates.at('document.type', 'portfolio')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = results.map(projeto => ({
    id: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail:
      userData.projects
        .filter(p => p.title.includes(projeto.data.title))
        .map(p => p.imgUrl)[0] || null
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
