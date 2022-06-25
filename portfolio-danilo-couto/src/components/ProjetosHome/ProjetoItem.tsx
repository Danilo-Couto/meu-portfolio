import Link from 'next/link';
import { IProjetoItemProps } from '../../interface';
import { ProjetoContainer } from './styles';

export default function ProjetoItem({
  title,
  type,
  slug,
  thumbnail
}: IProjetoItemProps) {
  return (
    <ProjetoContainer imgUrl={thumbnail} data-aos="fade-up">
      <Link href={`/projetos/${slug}`}>
        <section>
          <div className="overlay" />
          <div className="text">
            <h1>#{title}</h1>
            <h2>{type}</h2>
          </div>
        </section>
      </Link>
      {/* <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button> */}
    </ProjetoContainer>
  );
}
