import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import LoadingScreen from '../../../components/LoadingScreen';
import { client } from '../../../services/prismic';
import { IProjetoProps } from '../../../interface';
import HeadComponent from '../../../components/Head';
import userData from '../../../assets/data';

export default function Projeto({ projeto, changeMode }: IProjetoProps) {
  const router = useRouter();
  if (router.isFallback) return <LoadingScreen />;

  return (
    <ProjetoContainer>
      <HeadComponent />
      <Header changeMode={changeMode} />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        thumbnail={projeto.thumbnail}
      />
      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a target="_blank" href={projeto.link} rel="noreferrer">
            Ver projeto online
          </a>
        </button>
        <button type="button">
          <a target="_blank" href={projeto.gitLink} rel="noreferrer">
            Ver código GitHub
          </a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projetos = await client.query([
    Prismic.predicates.at('document.type', 'portfolio')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      id: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params;

  const response = await client.getByUID('portfolio', String(id), {});

  const projeto = {
    id: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    gitLink: userData.projects
      .filter(p => p.title.includes(response.data.title))
      .map(pr => pr.gitLink)[0],
    thumbnail: userData.projects
      .filter(p => p.title.includes(response.data.title))
      .map(pr => pr.imgUrl)[0]
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
