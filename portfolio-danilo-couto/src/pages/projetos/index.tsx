import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import userData from '../../assets/data';
import Footer from '../../components/Footer';
import HeadComponent from '../../components/Head';
import Header from '../../components/Header';
import ProjetosPage from '../../components/ProjetosPage';
import { client } from '../../services/prismic';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos({ projetos, changeMode }) {
  return (
    <ProjetosContainer>
      <HeadComponent />
      <Header changeMode={changeMode} />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetosPage
            key={projeto.id}
            title={projeto.title}
            type={projeto.type}
            id={projeto.id}
            thumbnail={projeto.thumbnail}
          />
        ))}
      </main>
      <Footer />
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectResponse = await client.query(
    [Prismic.Predicates.at('document.type', 'portfolio')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    id: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: userData.projects
      .filter(p => p.title.includes(projeto.data.title))
      .map(pr => pr.imgUrl)[0]
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
