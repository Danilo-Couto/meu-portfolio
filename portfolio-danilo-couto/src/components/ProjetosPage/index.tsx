import Link from 'next/link';
import { IProjetoItemProps } from '../../interface';
import { Container } from './styles';

function ProjetosPage({ title, type, thumbnail, id }: IProjetoItemProps) {
  return (
    <Container thumbnail={thumbnail}>
      <Link href={`/projetos/${id}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetosPage;
