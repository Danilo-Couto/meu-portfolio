import Link from 'next/link';
import { IProjectProps } from 'src/utils/interfaces';
import { SContainer } from 'src/components/ProjectPageItem/styles';

export default function ProjectPageItem({
  title,
  type,
  imgUrl,
  slug
}: IProjectProps) {
  return (
    <SContainer imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
      {/* usamos o Link para o navegador poder mostrar a url (ao final da pagina) ao passar o mouse. Se fosse apenas onClick perderia */}
    </SContainer>
  );
}
