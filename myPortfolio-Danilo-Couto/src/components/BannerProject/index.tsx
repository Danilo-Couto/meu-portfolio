import { IBannerProjectProps } from 'src/utils/interfaces';
import { SContainer } from 'src/components/BannerProject/styles';

function BannerProject({ title, type, imgUrl }: IBannerProjectProps) {
  return (
    <SContainer imgUrl={imgUrl}>
      <div className="overaly" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </SContainer>
  );
}

export default BannerProject;
