import SectionTitle from '../SectionTitle';
import Form from './Form';
import { SContainer } from './styles';

export default function FormContato() {
  return (
    <SContainer>
      <SectionTitle title="Hire Me!" description={<>Get in touch</>} />
      <Form />
    </SContainer>
  );
}
