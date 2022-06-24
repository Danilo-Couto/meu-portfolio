import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienciaItem({
  year,
  title,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      {/* data-aos from https://michalsnik.github.io/aos/ */}
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
