import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { Head } from 'next/document';
import LoadingScreen from '../../../components/LoadingScreen';
import Header from '../../../components/Header';
import BannerProject from '../../../components/BannerProject';
import { SProjectSlugStyles } from '../../../styles/ProjectSlugStyles';
import { client } from '../../../services/prismic';

export default function ProjectSlug({ project }) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <SProjectSlugStyles>
      <Head>
        {/* <title>{project.title} | Project </title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta property="og:description" content={project.description} /> */}
      </Head>

      <Header />
      <BannerProject
        title={project.title}
        type={project.type}
        imgUrl={project.imgUrl}
      />
      <main>
        <p>{project.description}</p>
        <button type="button">
          <a href={project.link}>Check Online</a>
          {/* abrir em nova janela */}
        </button>
        <button type="button">
          <a href="">Check Code</a>
          {/* incluir link do git no prismic */}
        </button>
      </main>
    </SProjectSlugStyles>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await client.query([
    Prismic.predicates.at('document.type', 'portfolio')
  ]);

  const paths = projects.results.map(project => ({
    params: { slug: project.uid }
  }));

  return {
    paths,
    fallback: true // ENTENDER MELHOR
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;
  const response = await client.getByUID('portfolio', String(slug), {}); // esta voltando array de slugs

  const project = {
    slug: response.uid,
    title: response.data.title,
    description: response.data.description,
    type: response.data.type,
    link: response.data.link.url
    // thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
