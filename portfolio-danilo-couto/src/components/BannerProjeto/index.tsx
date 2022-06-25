import { IBannerProjectProps } from '../../interface';
import { Container } from './styles';

function BannerProject({ title, type, thumbnail }: IBannerProjectProps) {
  return (
    <Container thumbnail={thumbnail}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

export default BannerProject;
