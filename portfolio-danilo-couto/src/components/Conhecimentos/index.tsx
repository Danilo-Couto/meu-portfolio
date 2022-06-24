import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiStyledComponents,
  SiJest,
  SiMocha,
  SiTypescript,
  SiMysql
} from 'react-icons/si';
import { DiNodejs, DiDocker, DiHeroku } from 'react-icons/di';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';


function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem
          title="Styled Components"
          icon={<SiStyledComponents />}
        />
        <ConhecimentoItem title="Jest" icon={<SiJest />} />
        <ConhecimentoItem title="Mocha" icon={<SiMocha />} />
        <ConhecimentoItem title="Nodejs" icon={<DiNodejs />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
        <ConhecimentoItem title="Mysql" icon={<SiMysql />} />
        {/* <ConhecimentoItem title="Mysql" icon={<SiExpress />} />
        <ConhecimentoItem title="Mysql" icon={<SiSequelize />} /> */}
        <ConhecimentoItem title="Docker" icon={<DiDocker />} />
        <ConhecimentoItem title="Heroku" icon={<DiHeroku />} />{' '}
      </section>
    </Container>
  );
}

export default Conhecimentos;
