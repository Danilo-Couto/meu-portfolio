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
import SectionTitle from 'src/components/SectionTitle';
import StackItem from 'src/components/Stack/StackItem';
import { ContainerStyle } from 'src/components/Stack/styles';

function Conhecimentos() {
  return (
    <ContainerStyle>
      <SectionTitle title="Stacks" />
      <section>
        <StackItem title="HTML" icon={<AiFillHtml5 />} />
        <StackItem title="CSS" icon={<FaCss3Alt />} />
        <StackItem title="Javascript" icon={<IoLogoJavascript />} />
        <StackItem title="React" icon={<FaReact />} />
        <StackItem title="Styled Components" icon={<SiStyledComponents />} />
        <StackItem title="Jest" icon={<SiJest />} />
        <StackItem title="Mocha" icon={<SiMocha />} />
        <StackItem title="Nodejs" icon={<DiNodejs />} />
        <StackItem title="Typescript" icon={<SiTypescript />} />
        <StackItem title="Mysql" icon={<SiMysql />} />
        {/* <StackItem title="Mysql" icon={<SiExpress />} />
        <StackItem title="Mysql" icon={<SiSequelize />} /> */}
        <StackItem title="Docker" icon={<DiDocker />} />
        <StackItem title="Heroku" icon={<DiHeroku />} />
      </section>
    </ContainerStyle>
  );
}

export default Conhecimentos;
