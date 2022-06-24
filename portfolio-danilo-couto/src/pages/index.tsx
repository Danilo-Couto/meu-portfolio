import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/ProjetosHome';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import { client } from '../services/prismic';
import 'aos/dist/aos.css';
import { IProjetosProps } from '../interface';
import LoadingScreen from '../components/LoadingScreen';

export default function Home({ projetos, changeMode }: IProjetosProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const router = useRouter();
  if (router.isFallback) return <LoadingScreen />;

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header changeMode={changeMode} />

      <main className="container">
        <HomeHero />
        <Conhecimentos />
        <Projetos projetos={projetos} />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectResponse = await client.query(
    [Prismic.Predicates.at('document.type', 'portfolio')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url
    // thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
