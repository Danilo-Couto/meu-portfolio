import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Head } from 'next/document';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experience from '../components/Experience';
import HomeProjects from '../components/HomeProjets';
import Stack from '../components/Stack';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import { client } from '../services/prismic';
import { IProjectProps } from '../utils/interfaces';

export default function Home(projects: IProjectProps[]) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | My Portfolio</title>
        <meta
          name="description"
          content="Full Stack developer student presenting my projects developed so far!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projects desenvolvidos por mim!"
        />
      </Head>
      <Header />
      <main className="container">
        <HomeHero />
        <Experience />
        <HomeProjects projects={projects} />
        <Stack />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const myRepo = await client.query(
    [Prismic.Predicates.at('document.type', 'portfolio')],
    { orderings: '[document.last_publication_date desc]' }
  );

  const projects = myRepo.results.map(p => ({
    slug: p.uid,
    title: p.data.title,
    type: p.data.type,
    description: p.data.description,
    link: p.data.link.url
    // thumbnail: p.type
  }));

  return {
    props: { projects },
    revalidate: 86400
  };
};
