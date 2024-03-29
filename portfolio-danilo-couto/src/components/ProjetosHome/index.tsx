import Link from 'next/link';
import { IProjetosProps } from '../../interface';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos({ projetos }: IProjetosProps) {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />
      <section>
        {projetos.slice(0, 4).map(projeto => (
          <ProjetoItem
            key={projeto.id}
            id={projeto.id}
            title={projeto.title}
            type={projeto.type}
            thumbnail={projeto.thumbnail}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver mais projetos </a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
