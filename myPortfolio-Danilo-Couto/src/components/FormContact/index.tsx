import SectionTitle from 'src/components/SectionTitle';
import Form from 'src/components/FormContact/Form';
import { SContainer } from 'src/components/FormContact/styles';

export default function FormContato() {
  return (
    <SContainer>
      <SectionTitle title="Hire Me!" description={<>Get in touch</>} />
      <Form />
    </SContainer>
  );
}
