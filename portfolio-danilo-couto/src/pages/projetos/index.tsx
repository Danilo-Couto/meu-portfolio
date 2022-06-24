import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import ProjetosPage from '../../components/ProjetosPage';
import { IProjetoProps } from '../../interface';
import { client } from '../../services/prismic';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos({ projetos, changeMode }: IProjetoProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Sou estudante full stack e apresento alguns projetos desenvolvidos por mim!"
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
        {projetos.map(projeto => (
          <ProjetosPage
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
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
    link: projeto.data.link.url,
    // thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
