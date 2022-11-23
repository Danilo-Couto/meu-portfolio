import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiJest,
  SiMocha,
  SiTypescript,
  SiMysql,
  SiStyledcomponents,
  SiPython,
  SiMongodb,
  SiNextdotjs,
  SiGithub,
  SiLinux,
  SiSequelize,
  SiPrisma,
  SiRedux
} from 'react-icons/si';
import {
  DiNodejs,
  DiDocker,
  DiHeroku,
  DiGoogleAnalytics
} from 'react-icons/di';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="Unix" icon={<SiLinux />} />{' '}
        <ConhecimentoItem title="Github" icon={<SiGithub />} />{' '}
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Redux" icon={<SiRedux />} />{' '}
        <ConhecimentoItem
          icon={<SiStyledcomponents />}
          title="Styled Components"
        />
        <ConhecimentoItem title="Jest" icon={<SiJest />} />
        <ConhecimentoItem title="Mocha" icon={<SiMocha />} />
        <ConhecimentoItem title="Nodejs" icon={<DiNodejs />} />
        <ConhecimentoItem title="Sequelize" icon={<SiSequelize />} />{' '}
        <ConhecimentoItem title="Prisma" icon={<SiPrisma />} />{' '}
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
        <ConhecimentoItem title="Mysql" icon={<SiMysql />} />
        <ConhecimentoItem title="Mongo" icon={<SiMongodb />} />
        <ConhecimentoItem title="Docker" icon={<DiDocker />} />
        <ConhecimentoItem title="Heroku" icon={<DiHeroku />} />
        <ConhecimentoItem title="NextJS" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="Python" icon={<SiPython />} />
        <ConhecimentoItem
          title="Google Analytics"
          icon={<DiGoogleAnalytics />}
        />{' '}
      </section>
    </Container>
  );
}

export default Conhecimentos;
