import { ISectionTitleProps } from '../../utils/interfaces';
import { SContainer } from './styles';

export default function SectionTitle({
  title,
  description
}: ISectionTitleProps) {
  return (
    <SContainer data-aos="fade-right">
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </SContainer>
  );
}
