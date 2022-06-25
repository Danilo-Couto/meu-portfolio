import Head from 'next/head';
import userData from '../../assets/data';

function HeadComponent() {
  return (
    <Head>
      <title>Home | Meu portfólio</title>
      <meta name={userData.name} content={userData.designation} />
      <meta property="og:image" content="/ogimage.png" />
      <meta property="og:image:secure_url" content="/ogimage.png" />
      <meta name="twitter:image" content="/ogimage.png" />
      <meta name="twitter:image:src" content="/ogimage.png" />
      <meta property="og:description" content={userData.description} />
    </Head>
  );
}

export default HeadComponent;
