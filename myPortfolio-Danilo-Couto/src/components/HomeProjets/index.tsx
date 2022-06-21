import Link from 'next/link';
import { IProjectProps } from 'src/utils/interfaces';
import SectionTitle from 'src/components/SectionTitle';
import ProjectItem from 'src/components/HomeProjets/ProjectItem';
import { SContainer } from 'src/components/HomeProjets/styles';

export default function HomeProjects({ projects }) {
  return (
    <SContainer>
      <SectionTitle title="Last Projects" />
      <section>
        {projects.projects.slice(0, 2).map((project: IProjectProps) => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug} // mudar para nome do project tratado
            imgUrl={project.imgUrl} // add image
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Check Projects</a>
        </Link>
      </button>
    </SContainer>
  );
}
