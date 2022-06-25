import { IExperienceProps } from '../../utils/interfaces';
import { SItemContainer } from './styles';

export default function ExperienceItem({
  year,
  title,
  description
}: IExperienceProps) {
  return (
    <SItemContainer data-aos="fade-up">
      {/* https://michalsnik.github.io/aos/ */}
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </SItemContainer>
  );
}