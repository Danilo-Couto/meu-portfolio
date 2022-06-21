import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { IProjectProps } from '../../utils/interfaces';
import { SProjectContainer } from './styles';

export default function ProjectItem({
  title,
  type,
  slug,
  imgUrl
}: IProjectProps) {
  return (
    <SProjectContainer imgUrl={imgUrl} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>{type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Check Out <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </SProjectContainer>
  );
}
